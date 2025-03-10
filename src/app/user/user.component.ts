import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule, GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = '';
  isLogged: boolean = false;
  savedUsername: string = '';

  login() {
    if(this.username.trim()) {
      this.isLogged = true;
      this.savedUsername = this.username;
    }
  }

  logout() {
    this.isLogged = false;
    this.savedUsername = '';
    this.username = '';
  }
}
