import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController, 
              private menuController: MenuController) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  //método que envía un saludo
  async Saludar() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenid@!',
      message: 'Que tengas un gran dia!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  //método que crea una ventana con dos botones

  async Confirmar() {
    const alert = await this.alertController.create({
      header: 'Confirme acción!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta cancelada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  //método que permite ingresar datos en un alert
  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos!',
      buttons: ['OK'],
      inputs: [
        {
          name:'nom',
          placeholder: 'Nombre..',
        },
        {
          placeholder: 'Nickname (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:'edad',
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Acerca de ti..',
        },
      ],
    });

    await alert.present();
  }




}
