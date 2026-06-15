import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Servizilogin } from '../../../servizi/servizilogin';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username: string = '';
  password: string = '';
  
  // Injected Servizilogin into the constructor
  constructor(
    private service: Servizilogin,
  ) {}

  // Method to check login credentials
  checkLogin()
  {
    this.service.login(this.username, this.password).subscribe({
      next: () => alert("Login effettuato con successo"),
      error: () => alert("Errore durante il login")
    });
  }
}
  