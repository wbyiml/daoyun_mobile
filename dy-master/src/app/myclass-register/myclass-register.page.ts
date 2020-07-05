import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
declare var BMap;
declare var BMapLib;
@Component({
  selector: 'app-myclass-register',
  templateUrl: './myclass-register.page.html',
  styleUrls: ['./myclass-register.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MyclassRegisterPage implements OnInit {
  experience = 2;
  distance = 5;
  interval = 1;
  longitude: number;
  latitude: number;

  list: any;
  newLeave: any = {};
  deadLeave: any = {};
  location: any;
  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  ngOnInit() {
    // this.newLeave.sqsj = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
    // this.deadLeave.sqsj = new Date(new Date().getTime() + (8 * 60 + this.interval) * 60 * 1000).toISOString();
    // this.newLeave.sqsj = this.formatData();
    // console.log(this.newLeave.sqsj);
    // console.log(this.deadLeave.sqsj);
    // navigator.geolocation.getCurrentPosition(this.setPosition);
    var geolocation = new BMap.Geolocation();

    geolocation.getCurrentPosition((r) => {

      console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
      this.longitude = r.point.lng;
      this.latitude = r.point.lat;

    }, { enableHighAccuracy: true });

  }
  // setPosition = (position) => {

  //   this.location = position.coords;

  //   console.log(position.coords);
  // }
  back() {
    this.localStorageService.remove('classid');
  }
  getparam() {
    const api = 'http://120.24.44.48:3000/api/getAllSystemParameter';
    this.httpService.get(api).then((response: any) => {
      this.list = response;
      console.log(this.list);

    })
  }
async register() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const alert1 = await this.alertController.create({
      header: '提示信息',
      message: '已发起签到',
      buttons: [
        {
          text: '确定',
          handler: () => {
          }
        }
      ]
    });
    // this.newLeave.sqsj = this.formatbeginData();
    // this.deadLeave.sqsj = this.formatendData();
    this.newLeave.sqsj = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
    this.deadLeave.sqsj = new Date(new Date().getTime() + (8 * 60 + this.interval) * 60 * 1000).toISOString();
    console.log(this.newLeave.sqsj);
    console.log(this.deadLeave.sqsj);

    var api = 'http://120.24.44.48:3000/api/createSign';
    const classid = this.localStorageService.get('classid', ' error');
    const userid = this.localStorageService.get('userid', ' error');
    const signin = {
      // class_number
      class_id: classid,
      experience: this.experience,

      create_time: this.newLeave.sqsj,

      creator: userid,

      distance: this.distance,

      deadline: this.deadLeave.sqsj,

      longitude: this.longitude,

      latitude: this.latitude,
      // extend_json
    }
    this.http.post(api, { 'signin': signin }, httpOptions).subscribe(response => {
      console.log(response);
      if (response !== '') {
        alert1.present();
      }
    })
  }
}
