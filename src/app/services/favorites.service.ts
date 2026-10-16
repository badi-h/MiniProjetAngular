import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  // Store as a plain array so computed signals based on it re-run on every change
  private readonly _ids = signal<number[]>([]);

  readonly count = computed(() => this._ids().length);

  // Expose the full list as a signal so templates can derive from it reactively
  readonly ids = this._ids.asReadonly();

  isFavorite(id: number): boolean {
    return this._ids().includes(id);
  }

  toggle(id: number): void {
    this._ids.update(current =>
      current.includes(id)
        ? current.filter(i => i !== id)
        : [...current, id]
    );
  }
}
