import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm implements OnInit {
  private router = inject(Router);
  private eventService = inject(EventService);

  eventForm!: FormGroup;
  formValue = signal<string>('');
  formStatus = signal<string>('INVALID');

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      place: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl(''),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    this.eventForm.valueChanges.subscribe(() => {
      this.formValue.set(JSON.stringify(this.eventForm.value, null, 2));
    });

    this.eventForm.statusChanges.subscribe((status) => {
      this.formStatus.set(status);
    });
  }

  getControl(name: string): FormControl {
    return this.eventForm.get(name) as FormControl;
  }

  addEvent(): void {
    if (this.eventForm.invalid) return;

    const val = this.eventForm.value;
    this.eventService.addEvent({
      title: val.title,
      category: val.category,
      date: val.date,
      place: val.place,
      price: Number(val.price),
      imageUrl: val.imageUrl || '',
      description: val.description,
    });

    this.eventForm.reset({ price: 0 });
    this.router.navigate(['/events']);
  }
}
