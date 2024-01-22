import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { IncrementAction, } from '../../../store/counter.actions';
import { decrement, increment } from '../../../store/counter.actions';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  constructor(private store: Store) { }
  decrement() {
    this.store.dispatch(decrement({ value: 1 }))
  }

  increment() {
    this.store.dispatch(increment({ value: 1 }))
    // this.store.dispatch(new IncrementAction(1))

  }

}
