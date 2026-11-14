import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
describe('Morales Viajes', () => {
  it('navega entre las dos páginas, cambia el carrusel y mantiene los botones sin funcionalidad', async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    fixture.detectChanges();
    await router.navigateByUrl('/principal');
    fixture.detectChanges();
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('nav[aria-label="Navegación principal"]')).toBeTruthy();
    expect(html.querySelector('footer')).toBeTruthy();
    expect(html.querySelectorAll('.slide img').length).toBe(2);
    expect(html.querySelectorAll('.slide:not([hidden])').length).toBe(1);
    (html.querySelector('[aria-label="Destino siguiente"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(html.querySelector('.slide:not([hidden]) img')?.getAttribute('src')).toBe('img_02.png');
    await router.navigateByUrl('/contactenos');
    fixture.detectChanges();
    const form = html.querySelector('form')!;
    expect(form.querySelectorAll('input, textarea').length).toBe(7);
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea').forEach(input => {
      expect(form.querySelector(`label[for="${input.id}"]`)).toBeTruthy();
      expect(html.querySelector(`#${input.getAttribute('aria-describedby')}`)).toBeTruthy();
    });
    const name = form.querySelector<HTMLInputElement>('#nombre')!;
    name.value = 'Ana Morales';
    const buttons = form.querySelectorAll<HTMLButtonElement>('button');
    expect(buttons.length).toBe(2);
    buttons.forEach(button => { expect(button.type).toBe('button'); button.click(); });
    expect(name.value).toBe('Ana Morales');
    expect(router.url).toBe('/contactenos');
  });
});
