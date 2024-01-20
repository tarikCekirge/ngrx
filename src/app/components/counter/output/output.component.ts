import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../../service/counter.service';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent implements OnInit, OnDestroy {

  counterService = inject(CounterService)
  counter = signal<number>(0);
  counterServiceSub?: Subscription;

  ngOnInit() {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      newVal => this.counter.set(newVal)
    )
  }
  ngOnDestroy() {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }

}
