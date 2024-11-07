import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: Event | null = null;
  newEvent: Event = { 
    title: '', 
    description: '', 
    date: new Date(), 
    location: '', 
    organizer: '', 
    maxParticipants: 0, 
    image: '' 
  };

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(response => {
      this.events = response.results.bindings.map((binding: any) => ({
        title: binding.title.value,
        description: binding.description.value,
        date: new Date(binding.date.value),
        location: binding.location.value,
        organizer: binding.organizer.value,
        maxParticipants: +binding.maxParticipants.value,
        image: binding.image.value,
      }));
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  addEvent(): void {
    this.eventService.addEvent(this.newEvent).subscribe(response => {
      console.log(response);
      this.getEvents(); // Rafraîchir la liste après ajout
      this.newEvent = { 
        title: '', 
        description: '', 
        date: new Date(), 
        location: '', 
        organizer: '', 
        maxParticipants: 0, 
        image: '' 
      }; // Réinitialiser le formulaire
    }, error => {
      console.error('Error adding event:', error);
    });
  }

  deleteEvent(eventUri: string): void {
    this.eventService.deleteEvent(eventUri).subscribe(response => {
      console.log(response);
      this.getEvents(); // Rafraîchir la liste après suppression
    }, error => {
      console.error('Error deleting event:', error);
    });
  }

  editEvent(event: Event): void {
    this.selectedEvent = { ...event }; // Cloner l'objet pour éviter la mutation directe
  }

  updateEvent(): void {
    if (this.selectedEvent) {
      this.eventService.updateEvent(this.selectedEvent).subscribe(response => {
        console.log(response);
        this.getEvents(); // Rafraîchir la liste après mise à jour
        this.selectedEvent = null; // Cacher le formulaire d'édition
      }, error => {
        console.error('Error updating event:', error);
      });
    }
  }
}