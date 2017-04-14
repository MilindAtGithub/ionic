import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
	 this.items.push({
        title: 'Login Logout ',
        note: 'Login Log Screen',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
	   this.items.push({
        title: 'Registration ',
        note: 'Registration goes here',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
	   this.items.push({
        title: 'Call Back ',
        note: 'Call Back Screen Goes Here',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
	    this.items.push({
        title: 'Pre Qual ',
        note: 'Pre Qual screen will appear here',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
	  this.items.push({
        title: '1003 From ',
        note: 'Enter 1003 form here',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
	  
    // for(let i = 1; i < 11; i++) {
		 
		
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
