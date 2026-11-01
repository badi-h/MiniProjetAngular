import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  id = input<string>('');

  private eventService = inject(EventService);

  event = computed<Event | undefined>(() =>
    this.eventService.getEventById(Number(this.id()))
  );

  readonly isFavorite = computed(() =>
    this.eventService.isFavorite(Number(this.id()))
  );

  onToggleFavorite(): void {
    this.eventService.toggleFavorite(Number(this.id()));
  }
}
