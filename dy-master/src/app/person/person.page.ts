import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController, MenuController, AlertController, NavController } from '@ionic/angular';
import { HttpserviceService } from '../services/httpservice.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class PersonPage implements OnInit {
  public personinfo: any = {
    name: '',
    birthday: '2020-06-04',
    phone: '',
    email: '',
    sexlist: ['man', 'woman'],
    sex: 'man',
    identitylist: ['teacher', 'student'],
    identity: 'teacher',
    idnumber: '123',

  }
  user: any;
  list: any;
  constructor(private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  ngOnInit() {
    this.getuserdata();
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
      this.personinfo.phone = this.user.user[0].phone;
      this.personinfo.name = this.user.user[0].name;
      this.personinfo.birthday = this.user.user[0].birthday;
      this.personinfo.birthday=this.formatendData(this.personinfo.birthday);
      this.personinfo.identity = this.user.user[0].identity;
      this.personinfo.idnumber = this.user.user[0].student_number;
      this.personinfo.email = this.user.user[0].email;


      console.log(this.user);
    })
  }
  formatendData(data) {
    let date = new Date(data);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let m1 = m < 10 ? ('0' + m) : m;
    let d = date.getDate();
    let d1 = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    let h1 = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    let second = date.getSeconds();
//    let minute1 = minute + this.interval < 10 ? ('0' + minute) : minute + this.interval;
    // minute1 = minute1 + 2;
    let second1 = second < 10 ? ('0' + second) : second;
    return y + '-' + m1 + '-' + d1 ;
  }
  save() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let userid = this.localStorageService.get('userid', ' error');
    let user = {
      id: userid,
      name: this.personinfo.name,
      sex: this.personinfo.sex,
      birthday: this.personinfo.birthday,
      phone: this.personinfo.phone,
      email: this.personinfo.email,
      identity: this.personinfo.identity,
      student_number: this.personinfo.idnumber,
      shcool_id: 1,
      faculty_id: 1,
      major_id: 1,
      shcool_name: '福州大学',
      faculty_name: '',
      major_name: '',
      user_name: 'aaaaa',
      head_image: '',  //dataUrl
      experience: 10, //总经验值
      extend_json: 20,
    }
    var api = 'http://120.24.44.48:3000/api/updateUser';
    this.localStorageService.set('identity', user.identity);
    this.http.post(api, { 'user': user }, httpOptions).subscribe(response => {
      console.log(response);
    })
  }
}
