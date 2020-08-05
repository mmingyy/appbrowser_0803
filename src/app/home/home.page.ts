import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {Platform, ToastController, NavController} from '@ionic/angular';
//import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private platform: Platform,
    private toastCtrl: ToastController,
  ) {
      // in-app-browser 생성
      const options: InAppBrowserOptions = {
        usewkwebview: 'yes'
        // zoom: 'no',
        // location: 'no',
        // toolbar: 'no',
        // hideurlbar: 'yes' //url bar 숨기기
      }
      const browser = this.iab.create('http://dolearn.co.kr', '_self', 'location=no, usewkwebview=no');//uiView
      //_self 작동(O)
      // const browser = this.iab.create('http://dolearn.co.kr', '_self', 'location=no, hideurlbar=yes, toolbar=no');

   //  const browser = this.iab.create('http://dolearn.co.kr');
      //const browser =   cordova.InAppBrowser.open('http://dolearn.co.kr/', '_self', 'location=no');
     
  }
}
