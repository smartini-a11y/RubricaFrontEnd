import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-btn-contatto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-contatto.html',
  styleUrl: './btn-contatto.css'
})
export class BtnContattoComponent {
  @Input() c!: any; // Your input property

  constructor(private router: Router) {} // Inject the router here

  vaiAlContatto(): void {
   
    this.router.navigate(['/contatto'], { 
      state: { contatto: this.c } 
    });
  }
  vaiAModifica(): void {
   
    this.router.navigate(['/pagina-modifica-contatto'], { 
      state: { contatto: this.c } 
    });
  }
}
