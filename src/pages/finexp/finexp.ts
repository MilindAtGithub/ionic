import { Component }       from '@angular/core';
import {DynamicFormComponent} from '../pages/dynamic-form/dynamic-form';
import {QuestionService} from './question-service';

@Component({
  selector: 'my-app',
  templateUrl: `finexp.html`,
 // directives: [DynamicFormComponent],
 providers:  [QuestionService]
})
export class FinExp {
  questions: any[];
  constructor( service: QuestionService ) {
    this.questions = service.getQuestions({});
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/