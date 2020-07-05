import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-waiterhelp',
  templateUrl: './waiterhelp.page.html',
  styleUrls: ['./waiterhelp.page.scss'],
})
export class WaiterhelpPage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }
  canGoBack() {
    this.nav.back();
  }
}
