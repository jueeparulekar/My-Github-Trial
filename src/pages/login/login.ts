import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListdemoPage } from '../listdemo/listdemo';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  private username: string;
  private password: string;
  private selectedUserType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http ) {
  }

  // trialopen(detailsFName) {
  //   this.navCtrl.push(HomePage);
  // }

  doLogin() {
    let body = new FormData();
    body.append('Usertype', this.selectedUserType);
    body.append('Mobileno', this.username);
    body.append('Password', this.password);

    // let headers = new Headers({
    //   'NDAPI-Key': 'XXXXXXXXX',
    //   'NDAPI-Host': 'XXXXXXXXX' });
    // let options = new RequestOptions({ headers: headers });

    this.http
        .post('https://development.mycit.co.in/pradnyaphp/tblNameNewV1Pdo/Login.php', body)
        .map(res => res.json())
        .subscribe(
          res => {
            if(res.success == '0') {
              // this.navCtrl.push(HomePage);
              alert(res.message);
            }else{
              this.navCtrl.push(ListdemoPage, { parentFName: res.Parent_Fname, parentLName: res.Parent_Lname });
              // alert("Welcome "+res.Parent_Fname+" "+res.Parent_Lname);
              console.log(res);
            }
            },
            err => {
              alert("Error");
              console.log("ERROR!: ", err);
            }
        );
  }

}
