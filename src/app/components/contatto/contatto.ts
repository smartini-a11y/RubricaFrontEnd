import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // <-- Import this
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './contatto.html',
  styleUrl: './contatto.css'
})
export class ContattoComponent implements OnInit {
  // Creating an object to hold the data so contatto.html can see it
  c: any = {};
  listaContatti: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    // Recuperiamo la lista che arriva dall'altra pagina
    const navigazione = this.router.getCurrentNavigation();
    if (navigazione?.extras.state) {
      this.listaContatti = navigazione.extras.state['tuttiIContatti'];
    }
  }

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