import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- Import this

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css'
})
export class ContattoComponent implements OnInit {
  // Creating an object to hold the data so contatto.html can see it
  c: any = {};

  // Inject ActivatedRoute to read the URL info
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Look at the URL and grab the parameters
    this.route.queryParams.subscribe(params => {
      this.c = {
        nome: params['nome'],
        cognome: params['cognome'],
        telefono: params['telefono'],
        email: params['email']
      };
    });
  }
}