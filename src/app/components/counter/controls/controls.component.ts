import { Component, inject } from '@angular/core';
import { CounterService } from '../../../service/counter.service';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  counterService = inject(CounterService)

  decrement() {
    this.counterService.decrement()
  }

  increment() {
    this.counterService.increment()

  }

}
