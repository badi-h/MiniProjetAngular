import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<Event>();

  private eventService = inject(EventService);

  readonly isFavorite = computed(() =>
    this.eventService.isFavorite(this.event().id)
  );

  readonly showFavorite = signal(false);

  onToggleFavorite(): void {
    this.eventService.toggleFavorite(this.event().id);
  }

  onToggleDetails(): void {
    this.showFavorite.update(v => !v);
  }
}
