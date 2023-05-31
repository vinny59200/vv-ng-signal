import { Component } from '@angular/core';
import { signal, computed }from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 // Define a writable signal for the count
 count = signal(0);

 // Define a computed signal for the double count
 doubleCount = computed(() => this.count() * 2);

 // Update the count signal by calling its setter or updater methods
 increment() {
   this.count.update((value) => value + 1);
 }

 decrement() {
   this.count.set(this.count() - 1);
 }
}
