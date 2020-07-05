import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-myclass-detail',
  templateUrl: './myclass-detail.page.html',
  styleUrls: ['./myclass-detail.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MyclassDetailPage implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  list: any;
  classnumber: string;
  // tslint:disable-next-line:variable-name
  class_id: any;
  public class: any = {
    class_name: '计算机一班',
    course: '',
    semester: '',

  };
  ngOnInit() {
    this.getclassdetail();

  }
  onClick() {
    this.navCtrl.navigateForward('/mealcode');
  }
  getclassdetail() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getClassById';
    const classid = this.localStorageService.get('classid', ' error');
    console.log(classid);
    this.class_id = classid;
    this.http.post(api, { 'class_id': classid }, httpOptions).subscribe(response => {
      this.list = response;
      this.class.name = this.list.classData.name;
      this.class.course = this.list.classData.course;
      this.class.semester = this.list.classData.semester;
      this.classnumber = this.list.classData.class_number;
      console.log(response);
    })
  }
  back() {
    this.localStorageService.remove('classid');
  }
  refresh() {
    location.reload();
  }
  deleteclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/deleteClass';
    const classid = this.localStorageService.get('classid', ' error');

    this.http.post(api, { 'class_id': classid }, httpOptions).subscribe(response => {
      this.list = response;
      console.log(response);
      // this.navCtrl.navigateForward('/tabs');
      // this.refresh();
      this.navCtrl.navigateRoot(['/tabs']).then(() => { location.reload(); });

    })

  }
  updateclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/updateClass';
    const classid = this.localStorageService.get('classid', ' error');
    const userid = this.localStorageService.get('userid', ' error');
    let classData = {
      // class_number
      'id': classid,
      'class_qrcode': 'dataurl', //二维码DataURL保存到本地  命名class_number
      'class_image': 'dataurl', // 图片DataURL保存到本地 命名class_number
      'name': this.class.class_name,
      'course': this.class.course,
      'semester': this.class.semester,
      'user_id': userid,
      'school_id': 1,
      'faculty_id': 1,
      'major_id': 1,
      'is_school_plan': true
      // extend_json
    }

    this.http.post(api, { 'classData': classData }, httpOptions).subscribe(response => {
      console.log(response);
    })
  }
}
