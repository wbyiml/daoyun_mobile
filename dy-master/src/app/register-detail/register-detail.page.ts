import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['./register-detail.page.scss'],
})
export class RegisterDetailPage implements OnInit {

   constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) {}
    list: any;

    ngOnInit() {
      this.getclassmember();
    }
    getclassmember() {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      var api = 'http://120.24.44.48:3000/api/getExperienceLogByUserIdClassId';
      const classid = this.localStorageService.get('classid', ' error');
      const useid = this.localStorageService.get('useid', ' error');
      this.http.post(api, {'user_id': useid ,'class_id': classid}, httpOptions).subscribe(response => {
        this.list = response;
        this.list = this.list.signins;
        console.log(response);
      })
    }
    back()
    {
      this.localStorageService.remove('useid');}

}
