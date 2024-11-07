import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8085'; // URL de base de l'API

  constructor(private http: HttpClient) { }

  addEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/addEvent`, event);
  }

  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllEvents`);
  }

  deleteEvent(eventUri: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteEvent`, { body: { event: eventUri } });
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateEvent`, event);
  }
}
