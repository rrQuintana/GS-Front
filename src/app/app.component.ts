import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  imports: [GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  city = 'San Francisco';
}
