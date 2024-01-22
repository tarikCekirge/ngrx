import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { init } from '../app/store/counter.actions'

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
export class AppComponent implements OnInit {
  title = 'NgRx Counter';

  ngOnInit(): void {
    this.store.dispatch(init())
  }
  constructor(private store: Store) { }
}
