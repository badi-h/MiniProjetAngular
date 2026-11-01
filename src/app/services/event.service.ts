import { Injectable, computed, signal } from '@angular/core';
import { Event } from '../models/event.model';
import { EVENTS } from '../data/events.data';

@Injectable({ providedIn: 'root' })
export class EventService {
  private _events = signal<Event[]>([...EVENTS]);
  private _favorites = signal<number[]>([]);

  readonly events = this._events.asReadonly();
  readonly favorites = this._favorites.asReadonly();

  readonly eventCount = computed(() => this._events().length);
  readonly favoriteCount = computed(() => this._favorites().length);
  readonly freeEventCount = computed(() => this._events().filter(e => e.price === 0).length);

  getEventById(id: number): Event | undefined {
    return this._events().find(e => e.id === id);
  }

  addEvent(event: Omit<Event, 'id'>): Event {
    const ids = this._events().map(e => e.id);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
    const newEvent: Event = { id: newId, ...event };
    this._events.update(list => [...list, newEvent]);
    return newEvent;
  }

  deleteEvent(id: number): void {
    this._events.update(list => list.filter(e => e.id !== id));
    this._favorites.update(ids => ids.filter(i => i !== id));
  }

  toggleFavorite(id: number): void {
    this._favorites.update(ids =>
      ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
    );
  }

  isFavorite(id: number): boolean {
    return this._favorites().includes(id);
  }
}
