import { HttpserviceService } from './../services/httpservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stuclass-detail',
  templateUrl: './stuclass-detail.page.html',
  styleUrls: ['./stuclass-detail.page.scss'],
})
export class StuclassDetailPage implements OnInit {

   constructor(public router: Router, private localStorageService: LocalStorageService, private alertController: AlertController, public navCtrl: NavController, public httpService: HttpserviceService, public http: HttpClient) { }
    list: any;
    public class: any = {
      class_name: '计算机一班',
      course: '',
      semester: '',
      experience: '2',

    };
    ngOnInit() {
      this.getclassdetail();
    }
     getclassdetail() {
        let httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        var api = 'http://120.24.44.48:3000/api/getClassById';
        const classid = this.localStorageService.get('classid', ' error');
        console.log(classid);
        this.http.post(api, { 'class_id': classid }, httpOptions).subscribe(response => {
          this.list = response;
          this.class.name = this.list.classData.name;
          this.class.course = this.list.classData.course;
          this.class.semester = this.list.classData.semester;
          console.log(response);
        })

      }
      back() {
        this.localStorageService.remove('classid');
      }

      async outclass()
      {
                     let httpOptions = {
                       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                     };

                     var api = 'http://120.24.44.48:3000/api/exitClass';
                     let userid = this.localStorageService.get('userid', ' error');
                     const classid = this.localStorageService.get('classid', ' error');
                     console.log(classid);
                     this.http.post(api, { 'user_id':userid,  'class_id': classid }, httpOptions).subscribe(response => {
                       this.list = response;
                       console.log(response);
                       this.navCtrl.navigateRoot(['/tabs']).then(() => { location.reload(); });
                     })
      }

}
