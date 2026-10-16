import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { EVENTS } from '../../data/events.data';
import { Event } from '../../models/event.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css'
})
export class EventDetails {
  // Receives the :id route param via withComponentInputBinding()
  id = input<string>('');

  event = computed<Event | undefined>(() => {
    const numId = Number(this.id());
    return EVENTS.find((e: Event) => e.id === numId);
  });

  private favoritesService = inject(FavoritesService);

  readonly isFavorite = computed(() =>
    this.favoritesService.isFavorite(Number(this.id()))
  );

  onToggleFavorite(): void {
    this.favoritesService.toggle(Number(this.id()));
  }
}
