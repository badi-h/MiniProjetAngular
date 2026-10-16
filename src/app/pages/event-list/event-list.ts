import { Component, computed, inject, signal } from '@angular/core';
import { EventCard } from '../../components/event-card/event-card';
import { EVENTS, CATEGORIES } from '../../data/events.data';
import { Event } from '../../models/event.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  private favoritesService = inject(FavoritesService);

  readonly allEvents = EVENTS;
  readonly categories = CATEGORIES;

  selectedCategory = signal<string>('Tous');

  filteredEvents = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'Tous') return this.allEvents;
    return this.allEvents.filter((e: Event) => e.category === cat);
  });

  // Only needed for the results-info line in the template
  readonly favoritesCount = this.favoritesService.count;

  selectCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }
}
