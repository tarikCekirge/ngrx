import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  counterChanged = new Subject<number>();

  decrement() {
    this.counter--;
    this.counterChanged.next(this.counter)
  }

  increment() {
    this.counter++;
    this.counterChanged.next(this.counter)
  }

}
