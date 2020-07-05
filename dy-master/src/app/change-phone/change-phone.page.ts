import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController, MenuController, AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.page.html',
  styleUrls: ['./change-phone.page.scss'],
})
export class ChangePhonePage implements OnInit {
    phone: '';
    password: '';
    user: any;
    flag: any;
 constructor(public nav:NavController,private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }

  ngOnInit() {
  }
async onclick()
{
 const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
        var api = 'http://120.24.44.48:3000/api/updatePhone';
        let userid = this.localStorageService.get('userid', ' error');
        let phone = this.phone;
        let phone_password = this.password;

        this.http.post(api, {  'user_id': userid, 'phone': phone,'phone_password':phone_password }, httpOptions).subscribe(response => {
          this.flag = response;
          console.log(this.flag);

        }
        )
      if(this.flag == -1){
         const alert = await this.alertController.create({
                header: '提示信息',
                message: '号码重复...',
               buttons: [
                      {
                         text: '确定',
                         handler: () => {
                            //退出到登陆界面
                         }
                       }
                     ]
                   });
              await alert.present();
              }
          else
          {

                   const alert = await this.alertController.create({
                          header: '提示信息',
                          message: '更改成功...',
                         buttons: [
                                {
                                   text: '确定',
                                   handler: () => {
                                      this.nav.back();
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
