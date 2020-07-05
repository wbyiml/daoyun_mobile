import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController, MenuController, AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Tab3Page {

  constructor(public nav:NavController,private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  name: '';
  user: any;
  ngOnInit() {
    this.getuserdata();
  }
  quit() {
    this.localStorageService.remove('userid');
  }
  getuserdata() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getUserById';
    let userid = this.localStorageService.get('userid', ' error');

    this.http.post(api, { 'user_id': userid }, httpOptions).subscribe(response => {
      this.user = response;
      this.name = this.user.user[0].name;
      console.log(this.name)
    })
  }

   async presentAlert() {
        const alert = await this.alertController.create({
          header: '提示信息',
          message: '已是最新版本...',
          buttons: ['确认']
        });
        await alert.present();
        }

    canGoBack() {
        this.nav.back();
        }

     async presentAlertMultipleButtons() {
         const alert = await this.alertController.create({
           header: '提示信息!',
           message: '确定退出系统?',
           buttons: [
             {
               text: '取消',
               role: 'cancel',
               cssClass: 'secondary',   //注意自定义class写在全局
               handler: (blah) => {
                 console.log('Confirm Cancel: blah');
               }
             }, {
               text: '确定',
               handler: () => {
                  this.nav.navigateRoot(['/']);//退出到登陆界面
               }
             }
           ]
         });
         await alert.present();
       }



}
