import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarroServiceProvider } from '../../providers/carro-service/carro-service';

/**
 * Generated class for the CarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroService: CarroServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrosPage');
  }

}
