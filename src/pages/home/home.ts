import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Parent_Fname: String;
  public Parent_Lname: String

  constructor(public navCtrl: NavController,
              public navParams: NavParams ) {

                this.Parent_Fname = this.navParams.get("parentFName");
                this.Parent_Lname = this.navParams.get("parentLName");
                
                console.log(this.Parent_Fname);
                console.log(this.Parent_Lname);

  }

  

}
