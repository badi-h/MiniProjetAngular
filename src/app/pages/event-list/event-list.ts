import { Component, computed, inject, signal } from '@angular/core';
import { EventCard } from '../../components/event-card/event-card';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  private eventService = inject(EventService);

  readonly categories = ['Tous', 'Atelier', 'Conférence', 'Compétition', 'Sport'];
  selectedCategory = signal<string>('Tous');

  readonly allEvents = this.eventService.events;
  readonly eventCount = this.eventService.eventCount;
  readonly favoriteCount = this.eventService.favoriteCount;
  readonly freeEventCount = this.eventService.freeEventCount;

  filteredEvents = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'Tous') return this.allEvents();
    return this.allEvents().filter((e: Event) => e.category === cat);
  });

  selectCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  deleteEvent(id: number): void {
    if (confirm('Supprimer cet événement ?')) {
      this.eventService.deleteEvent(id);
    }
  }
}
