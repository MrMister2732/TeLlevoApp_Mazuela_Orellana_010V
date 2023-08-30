import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      name: 'Inicio',
      redirecTo: '/inicio',
      icon: 'bicycle-outline'
    },
    {
      name: 'Action-sheet',
      redirecTo: '/action-sheet',
      icon: 'cafe-outline'
    },
    {
      name: 'Alert',
      redirecTo: '/alert',
      icon: 'bug-outline'
    },
    {
      name: 'Card',
      redirecTo: '/card',
      icon: 'sunny-outline'
    },
    {
      name: 'Formulario',
      redirecTo: '/formulario',
      icon: 'key-outline'
    },
  ]




}
