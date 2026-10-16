import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Event } from '../../models/event.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  event = input.required<Event>();

  private favoritesService = inject(FavoritesService);

  readonly isFavorite = computed(() =>
    this.favoritesService.isFavorite(this.event().id)
  );

  readonly showFavorite = signal(false);

  onToggleFavorite(): void {
    this.favoritesService.toggle(this.event().id);
  }

  onToggleDetails(): void {
    this.showFavorite.update(v => !v);
  }
}
