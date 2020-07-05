import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController, MenuController, AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
})
export class SetPasswordPage implements OnInit {

  phone: '';
  newpassword: '';
  confirmnewpassword: '';
  user: any;
  flag: any;
  constructor(public nav: NavController, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }


  ngOnInit() {
  }
  async onclick() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let alert2 = await this.alertController.create(
      {

        header: '提示',
        message: '两次密码不一致',
        buttons: ['确定']
      }
    );
    var api = 'http://120.24.44.48:3000/api/updatePhonePassword';
    let userid = this.localStorageService.get('userid', ' error');
    let phone = this.phone;
    let phone_password = this.newpassword;
    let confirmphone_password = this.confirmnewpassword;
    if (phone_password !== confirmphone_password) {// 如果密码为空
      alert2.present();
    }
    else {
      this.http.post(api, { 'user_id': userid, 'phone': phone, 'phone_password': phone_password }, httpOptions).subscribe(response => {
        this.flag = response;
        console.log(this.flag);

      }
      )
      const alert = await this.alertController.create({
        header: '提示信息',
        message: '保存成功...',
        buttons: [
          {
            text: '确定',
            handler: () => {
              this.nav.back();//退出到登陆界面
            }
          }
        ]
      });
      await alert.present();
    }

  }
  canGoBack() {
    this.nav.back();
  }

}
