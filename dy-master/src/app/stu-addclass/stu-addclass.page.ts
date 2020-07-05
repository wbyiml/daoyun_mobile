import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { RouterLink } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
import { promise } from 'protractor';


@Component({
  selector: 'app-stu-addclass',
  templateUrl: './stu-addclass.page.html',
  styleUrls: ['./stu-addclass.page.scss'],
})
export class StuAddclassPage implements OnInit {

  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
  list: any;
  classiid;
  public class: any = {
    class_name: '计算机一班',
    course: '',
    semester: '',

  };
  ngOnInit() {
    this.getclassdetail();

  }
  getclassdetail() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var api = 'http://120.24.44.48:3000/api/getClassByClassNumber';
    const classnumber = this.localStorageService.get('classnumber', ' error');
    console.log(classnumber);
    //const classid = this.localStorageService.get('classid', ' error');
    const userid = this.localStorageService.get('userid', ' error');

    console.log(userid);
    this.http.post(api, { 'user_id': userid, 'class_number': classnumber }, httpOptions).subscribe(response => {
      //     this.http.post(api, { 'class_id': classid }, httpOptions).subscribe(response => {
      this.list = response;
      this.class.name = this.list.classData.name;
      this.class.course = this.list.classData.course;
      this.class.semester = this.list.classData.semester;
      this.classiid = this.list.classData.id;
      console.log(response);
    })
  }
  back() {
    this.localStorageService.remove('classid');
  }

  async addtoclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let alert = await this.alertController.create(
      {
        /*  message:'请输入你的邮箱',
          duration:3000*/
        header: '提示',
        message: '已加入该班课或该班课不存在',
        buttons: ['确定']
      }
    );
    let alert1 = await this.alertController.create(
      {
        /*  message:'请输入你的邮箱',
          duration:3000*/
        header: '提示',
        message: '成功加入',
        buttons: ['确定']
      }
    );
    var api = 'http://120.24.44.48:3000/api/joinClass';
    let userid = this.localStorageService.get('userid', ' error');
    //           const classid = this.localStorageService.get('classid', ' error');
    //           const classnumber = this.localStorageService.get('classnumber', ' error');
    console.log(userid);
    console.log(this.classiid);

    this.http.post(api, { 'user_id': userid, 'class_id': this.classiid }, httpOptions).subscribe(response => {
      //      this.http.post(api, { 'user_id': userid, 'class_number':classnumber}, httpOptions).subscribe(response => {
      this.list = response;
      console.log(this.list);

      if (this.list.class_id === -1) {
        alert.present();
        console.log("加入失败");
      }
      else if (this.list.class_id === -2) {
        //             this.userid = this.localStorageService.set('userid', this.flag.user_id)
        //               this.navCtrl.navigateForward('/tabs');
        alert.present();
        console.log("已存在");

      }
      else{
        alert1.present();
      }
    }
    )

  }
}
