import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastController, MenuController, AlertController, NavController } from '@ionic/angular';
import { promise } from 'protractor';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {

  constructor(private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  way = 'phone';
  phone = '';
  password = '';
  flag;
  userid;
  phoneflag;
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
  async login() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // let options = new RequestOptions({ headers: headers });
    let alert = await this.alertController.create(
      {
        /*  message:'请输入你的邮箱',
          duration:3000*/
        header: '提示',
        message: '用户名或密码不正确',
        buttons: ['确定']
      }
    );
    let alert1 = await this.alertController.create(
      {
        /*  message:'请输入你的邮箱',
          duration:3000*/
        header: '提示',
        message: '手机号码格式错误',
        buttons: ['确定']
      }
    );
    var api = 'http://120.24.44.48:3000/api/login';
    let way = this.way;
    let account = this.phone;
    let password = this.password;
    this.checkMobile(account);
    if (this.phoneflag === 0) {
      alert1.present();
    }
    else {
      this.http.post(api, { 'way': way, 'account': account, 'password': password }, httpOptions).subscribe(response => {
        this.flag = response;
        console.log(this.flag);

        if (this.flag.user_id === -1 || this.flag.user_id === -2) {
          alert.present();
          console.log("登录失败");
        }
        else {
          this.userid = this.localStorageService.set('userid', this.flag.user_id);
          this.navCtrl.navigateForward('/tabs');

        }
      }
      )

    }

  }



  register() {
    this.navCtrl.navigateForward('/register');
  }

}
