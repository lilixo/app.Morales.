import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ selector: 'app-principal', standalone: true, imports: [RouterLink], templateUrl: './principal.html', styleUrl: './principal.css' })
export class Principal {
  imagenActual = 0;
  cambiarImagen(indice: number): void { this.imagenActual = (indice + 2) % 2; }
}
