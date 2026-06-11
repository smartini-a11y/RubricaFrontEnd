import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-btn-contatto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-contatto.html',
  styleUrl: './btn-contatto.css'
})
export class BtnContattoComponent {
  // 👇 This tells Angular that a contact 'c' will be passed into this component!
  @Input() c!: any; 

  vaiAlContatto(): void {
    // Your navigation or click logic goes here...
    console.log('Selected contact:', this.c);
  }
}