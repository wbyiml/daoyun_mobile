import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Tab1Page {
  public tab = 'tab1';
  public list: any;
  classid: number;
  identity: any;
  user: any;
  permission: any;
  constructor(private barcodeScanner: BarcodeScanner, public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) {
  }
  stuclass_number: string;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getuserclass();
    this.getUserPermissions();
    this.getuserdata();
    // this.getAllPermissions();
  }
  getuserdata() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getUserById';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.user = response;
      // for (let use of this.user) {
      this.identity = this.user.user[0].identity;
      this.localStorageService.set('identity', this.identity);


      console.log(this.user);
    })
  }
  getAllPermissions() {
    var api = 'http://120.24.44.48:3000/api/getAllPermissions';
    this.http.get(api).subscribe(response => {
      console.log(response);
    });
  }
  getUserPermissions() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getUserPermissions';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.permission = response;
      // this.list = this.list.classes;

      console.log(this.permission);
    })
  }

  getuserclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getClassByUserId';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.list = response;
      this.list = this.list.classes

      console.log(this.list);
    })

  }

  getstuuserclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getUserClassByUserId';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.list = response;
      this.list = this.list.classes;

      console.log(this.list);
    })

  }

  async addclass() {
    const identity = this.localStorageService.get('identity', 'error');
    const alert1 = await this.alertController.create(
      {

        header: '提示',
        message: '您没有权限,请与管理员联系',
        buttons: ['确定']
      }
    );
    if (identity !== 'teacher') {
      alert1.present();
    }
    else {
      this.router.navigate(['addclass']);
    }
  }
  onClick(class_id: number, class_number: string) {

    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/myclass']);


  }
  stuonClick(class_id: number, class_number: string) {

    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/stuclass']);
  }
  searchclick(class_id: number, class_number: string) {
    class_number = this.stuclass_number;
    this.localStorageService.set('classid', class_id);
    this.localStorageService.set('classnumber', class_number);
    this.router.navigate(['/stu-addclass']);
  }
  // searchclick3( class_number: string) {
  //   // class_number = this.stuclass_number;
  //   // this.localStorageService.set('classid', class_id);
  //   this.localStorageService.set('classnumber', class_number);
  //   this.router.navigate(['/stu-addclass']);
  // }
  searchclick2() {
    this.barcodeScanner.scan().then(barcodeData => {
      // alert(JSON.stringify(barcodeData).substr(9, 7));
      // alert(JSONbarcodeData);
      const a = JSON.stringify(barcodeData)[0];
      // for (let key in a) {
      //   // value = obj[key];
      //   if (key === text) {
      //    alert(a[key]);
      //   }
      // }
      this.stuclass_number = JSON.stringify(barcodeData).substr(9, 7);
      // this.stuclass_number = this.stuclass_number.substring(7, 15);
      // alert(this.stuclass_number);
      this.localStorageService.set('classnumber', this.stuclass_number);
      this.router.navigate(['/stu-addclass']);
    }).catch(err => {
      alert(err);
    });
  }

}
