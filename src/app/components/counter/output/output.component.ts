import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../../../store/counter.selectors';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount)
  }





}
