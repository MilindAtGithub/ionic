import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import {CheckboxControl} from './question-checkbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions(objectModel) {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        value: objectModel.brave,
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        //value: 'Bombasto',
        required: true,
        value: objectModel.firstName,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        value: objectModel.emailAddress,
        order: 2
      }),
      
      new TextboxQuestion({
        key: 'birthdate',
        label: 'Birthday',
        type: 'date',
        required:true,
        value: objectModel.birthdate,
        order: 4
      }),
            new TextboxQuestion({
        key: 'demodate',
        label: 'Demo Date',
        type: 'date',
        required:true,
        value: objectModel.demodate,
        order: 4
      })


    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/