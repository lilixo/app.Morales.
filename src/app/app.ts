import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './web/cabecera';
import { Piedepagina } from './web/piedepagina';
@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, Cabecera, Piedepagina], templateUrl: './app.html', styleUrl: './app.css' })
export class App {}
