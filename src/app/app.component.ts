import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { ControlsComponent } from './components/counter/controls/controls.component';
import { OutputComponent } from './components/counter/output/output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadingComponent, ControlsComponent, OutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgRx Counter';
}
