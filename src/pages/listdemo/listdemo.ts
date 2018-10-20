import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ListdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listdemo',
  templateUrl: 'listdemo.html',
})
export class ListdemoPage {
  items: any;
   subcategories: any;
   posts : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.items = this.http.get("https://development.mycit.co.in/pradnyaphp/tblNameNewV1Pdo/getStudentsName.php")
    .map(res => res.json())
    .subscribe(data=>{
      this.posts = data["studentlist"]; 
      console.log(this.posts.Std_Name);
    
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ListdemoPage');
  // }

  
    
  

}
