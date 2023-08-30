import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(private menuController: MenuController, 
              private alertController: AlertController) { }

  usuario ={
    nombre:'',
    email:'',
    edad:'',
    password:''
  }

  ngOnInit() {
  }

 
  MostrarMenu(){
    this.menuController.open('first');
  }

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Sus datos han sido enviados!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  Enviar(){
    console.log('Enviado!');
    this.MostrarMensaje();
    this.usuario.nombre='';
    this.usuario.email='';
    this.usuario.edad='';
    this.usuario.password='';

  }


}
