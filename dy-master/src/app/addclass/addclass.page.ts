import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.page.html',
  styleUrls: ['./addclass.page.scss'],
})
export class AddclassPage implements OnInit {
  public list: any[] = [];
  public class: any = {
    class_name: '计算机一班',
    course: '',
    semester: '二',

  };
  constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }

  ngOnInit() {
    // this.getdata();
  }
  async createclass() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const alert1 = await this.alertController.create(
      {

        header: '提示',
        message: '您没有权限',
        buttons: ['确定']
      }
    );
    const identity = this.localStorageService.get('identity', 'error');
    console.log(identity);
    if (identity !== 'teacher') {
      alert1.present();
    }
    else {
      var api = 'http://120.24.44.48:3000/api/createClass';
      let userid = this.localStorageService.get('userid', ' error');
      let classData = {
        // class_number
        'class_qrcode': 'dataurl', //二维码DataURL保存到本地  命名class_number
        'class_image': 'dataurl', // 图片DataURL保存到本地 命名class_number
        'name': this.class.class_name,
        'course': this.class.course,
        'semester': this.class.semester,
        'user_id': userid,
        'class_number': -1,
        'school_id': 1,
        'faculty_id': 1,
        'major_id': 1,
        'is_school_plan': true
        // extend_json
      }
      //{ class_image:'',name: '计算机',course:'',semester:'', user_id: '123',shcool_id:'',faculty_id:'',major_id:'',is_school_plan:'' }
      this.http.post(api, { 'classData': classData }, httpOptions).subscribe(response => {
        console.log(response);
        this.navCtrl.navigateRoot(['/tabs']).then(() => { location.reload(); });

      })


    }

  }
}
