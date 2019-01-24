import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowErrorPage } from './show-error';

@NgModule({
  declarations: [
    ShowErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowErrorPage),
  ],
})
export class ShowErrorPageModule {}
