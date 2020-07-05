import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.page.html',
  styleUrls: ['./persondetail.page.scss'],
})
export class PersondetailPage implements OnInit {

  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  public personinfo: any = {
    name: '',
    identitylist: ['teacher', 'student'],
    identity: 'teacher',
    idnumber: '',
  }
  flag: any;
  ngOnInit() {
  }
  save() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    var api = 'http://120.24.44.48:3000/api/initializeUser';
    const name = this.personinfo.name;
    const identity = this.personinfo.identity;
    const idnumber = this.personinfo.idnumber;
    const userid = this.localStorageService.get('userid', ' error');
    // tslint:disable-next-line:max-line-length
    this.http.post(api, { 'user_id': userid, 'identity': identity, 'name': name, 'student_number': idnumber }, httpOptions).subscribe(response => {
      this.flag = response;
      console.log(this.flag);

      this.router.navigate(['']);


    })

  }
}
