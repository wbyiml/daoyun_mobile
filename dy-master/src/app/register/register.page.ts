import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  public personinfo: any = {

    phone: '',
    password: '',
    confirmpassword: '',
  }
  flag: any;
  userid: any;
  phoneflag: any;
  ngOnInit() {
  }

  checkMobile(str) {

    const re = /^1\d{10}$/;

    if (re.test(str)) {

      this.phoneflag = 1;

    } else {

      this.phoneflag = 0;

    }

  }


  async register() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let alert1 = await this.alertController.create(
      {

        header: '提示',
        message: '密码为空',
        buttons: ['确定']
      }
    );
    let alert2 = await this.alertController.create(
      {

        header: '提示',
        message: '两次密码不一致',
        buttons: ['确定']
      }
    );
    let alert3 = await this.alertController.create(
      {

        header: '提示',
        message: '手机号已存在',
        buttons: ['确定']
      }
    );
    let alert4 = await this.alertController.create(
      {

        header: '提示',
        message: '手机号格式错误',
        buttons: ['确定']
      }
    );
    let api = 'http://120.24.44.48:3000/api/sinup';
    const phone = this.personinfo.phone;
    const password = this.personinfo.password;
    const confirmpassword = this.personinfo.confirmpassword;
    const createtime = 1;
    this.checkMobile(phone);
    if (this.phoneflag === 0) {// 手机格式错误
      alert4.present();
    }
    if (password === '') {// 如果密码为空
      alert1.present();
    } else if (password === confirmpassword && this.phoneflag === 1) {

      this.http.post(api, { 'phone': phone, 'phone_password': password, 'create_time': createtime }, httpOptions).subscribe(response => {
        this.flag = response;
        console.log(this.flag);

        if (this.flag.user_id === -1) {
          alert3.present();
        }
        else {
          this.userid = this.localStorageService.set('userid', this.flag.user_id);
          this.router.navigate(['/persondetail']);

        }
      })


    } else if (password !== confirmpassword) {
      alert2.present();
    }

  }

}
