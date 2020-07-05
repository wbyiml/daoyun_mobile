import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './../services/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

declare var BMap;
declare var BMapLib;
@Component({
  selector: 'app-stu-register',
  templateUrl: './stu-register.page.html',
  styleUrls: ['./stu-register.page.scss'],
})
export class StuRegisterPage implements OnInit {
  newLeave: any = {};
  user: any;
  experience: any;
  constructor(public nav: NavController, public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  flag;
  state;
  name;
  extend_json;
  longitude: number;
  latitude: number;
  ngOnInit() {
    this.getuserdata();
    var geolocation = new BMap.Geolocation();

    geolocation.getCurrentPosition((r) =>  {

      console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
      this.longitude = r.point.lng;
      this.latitude = r.point.lat;

    }, { enableHighAccuracy: true });
  }
  async register() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const alert1 = await this.alertController.create({
      header: '提示信息',
      message: '教师未发起签到',
      buttons: [
        {
          text: '确定',
          handler: () => {
            //退出到登陆界面
          }
        }
      ]
    });
    const alert2 = await this.alertController.create({
      header: '提示信息',
      message: '签到过期',
      buttons: [
        {
          text: '确定',
          handler: () => {
            //退出到登陆界面
          }
        }
      ]
    });
    const alert3 = await this.alertController.create({
      header: '提示信息',
      message: '签到成功',
      buttons: [
        {
          text: '确定',
          handler: () => {
            this.navCtrl.navigateRoot(['/stuclass']).then(() => { location.reload(); });
            //退出到登陆界面
          }
        }
      ]
    });
    const alert4 = await this.alertController.create({
      header: '提示信息',
      message: '您不在签到范围内',
      buttons: [
        {
          text: '确定',
          handler: () => {
            //退出到登陆界面
          }
        }
      ]
    });
    const alert5 = await this.alertController.create({
      header: '提示信息',
      message: '您已签到，请勿重复签到',
      buttons: [
        {
          text: '确定',
          handler: () => {
            //退出到登陆界面
          }
        }
      ]
    });
    this.newLeave.sqsj = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
    var api = 'http://120.24.44.48:3000/api/joinSignin';
    const userid = this.localStorageService.get('userid', ' error');
    const classid = this.localStorageService.get('classid', ' error');
    console.log(classid, userid, this.newLeave.sqsj);
    // tslint:disable-next-line:max-line-length
    this.http.post(api, { 'class_id': classid, 'user_id': userid, 'signin_time': this.newLeave.sqsj, 'user_experience': this.experience,'longtitude': this.longitude,'latitude': this.latitude }, httpOptions).subscribe(response => {
      this.flag = response;
      this.flag = this.flag.state;
      console.log(this.flag);
      if (this.flag === -1) {
        alert1.present();
      }
      else if (this.flag === -2) {
        alert2.present();
      }
      else if (this.flag === -3) {
        alert4.present();
      }
      else if (this.flag === -4) {
        alert5.present();
      }
      else if (this.flag === 1) {
        alert3.present();
        
      }
    });

  }
  back() {
    this.localStorageService.remove('classid');
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
      // this.personinfo.phone = this.user.user[0].phone;
      // this.personinfo.name = this.user.user[0].name;
      // this.personinfo.birthday = this.user.user[0].birthday;
      // this.personinfo.birthday=this.formatendData(this.personinfo.birthday);
      // this.personinfo.identity = this.user.user[0].identity;
      // this.personinfo.idnumber = this.user.user[0].student_number;
      // this.personinfo.email = this.user.user[0].email;
      this.experience = this.user.user[0].experience;

      // console.log(this.user);
    })
  }
}
