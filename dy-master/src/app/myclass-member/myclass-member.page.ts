import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myclass-member',
  templateUrl: './myclass-member.page.html',
  styleUrls: ['./myclass-member.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MyclassMemberPage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  list: any;
  list1: any;
  ngOnInit() {
    this.getclassmember();
  }
  getclassmember() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getUserClassByClassId';
    const classid = this.localStorageService.get('classid', ' error');
    this.http.post(api, { 'class_id': classid }, httpOptions).subscribe(response => {
      this.list = response;
      this.list = this.list.users;
      // console.log(response);
      // tslint:disable-next-line:forin
      for (let x in this.list) {
        // console.log(this.list[x].id);
        // this.getexperiencehistory(this.list[x].experience, this.list[x].id);
        var api1 = 'http://120.24.44.48:3000/api/getExperienceLogByUserIdClassId';
        // const classid = this.localStorageService.get('classid', ' error');
        // const useid = this.localStorageService.get('useid', ' error');
        let useid = this.list[x].id;
        let a = 0;
        let b: any;
        this.http.post(api1, { 'user_id': useid, 'class_id': classid }, httpOptions).subscribe(response1 => {
          this.list1 = response1;
          this.list1 = this.list1.signins;
          // tslint:disable-next-line:forin
          for (let x in this.list1) {
            a = a + this.list1[x].experience;
          }
          this.list[x].experience = a;
        });
      }
      // console.log(this.list1);
    })
  }
  getexperiencehistory(experience, user_id) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getExperienceLogByUserIdClassId';
    const classid = this.localStorageService.get('classid', ' error');
    // const useid = this.localStorageService.get('useid', ' error');
    let useid = user_id;
    let a = 0;
    let b: any;
    this.http.post(api, { 'user_id': useid, 'class_id': classid }, httpOptions).subscribe(response => {
      this.list1 = response;
      this.list1 = this.list1.signins;
      // tslint:disable-next-line:forin
      for (let x in this.list1) {
        a = a + this.list1[x].experience;
      }
      return a;
    });
    console.log(a);
  }
  back() {
    this.localStorageService.remove('classid');
  }

  onClick(user_id: number) {

    //      this.localStorageService.set('classid', class_id);
    this.localStorageService.set('useid', user_id);
    this.router.navigate(['/register-detail']);
  }
}