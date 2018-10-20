import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListdemoPage } from './listdemo';

@NgModule({
  declarations: [
    ListdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListdemoPage),
  ],
})
export class ListdemoPageModule {}
