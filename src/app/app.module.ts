import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
//import { DynamicFormComponent }     from './dynamic-form.component';
//import { AppComponent } from '../pages/dynamicform/app.component';
import {DynamicFormComponent} from '../pages/dynamic-forms/dynamic-form';
import {QuestionService} from '../pages/dynamic-forms/question.service';
import {FinExp} from '../pages/finexp/finexp';

import {DynamicFormComponent1} from '../pages/finexp/dynamic-form';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    DynamicFormComponent,
    FinExp,

    DynamicFormComponent1,

    //ReactiveFormsModule
   //ynamicFormComponent
  // AppComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    FinExp,
    
    DynamicFormComponent1,

   //AppComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
