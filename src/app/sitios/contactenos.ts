import { Component } from '@angular/core';
@Component({ selector: 'app-contactenos', standalone: true, templateUrl: './contactenos.html', styleUrl: './contactenos.css' })
export class Contactenos {
  readonly fechaMinima = this.fechaLocal();
  private fechaLocal(): string {
    const hoy = new Date();
    return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
  }
}
