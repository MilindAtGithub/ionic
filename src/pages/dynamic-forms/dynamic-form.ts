import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { QuestionBase }                 from './question-base';
import { QuestionControlService }       from './question-control.service';
//import { ControlGroup }     from '@angular/common';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html',
  providers:  [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad:any;
  questiont: QuestionBase<any>;
  questiond: QuestionBase<any>;
  constructor(private qcs: QuestionControlService, private cdr: ChangeDetectorRef) {  }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log("Form Init",this.questions);
    this.questiont = JSON.parse(JSON.stringify(this.questions));
    this.questiond = JSON.parse(JSON.stringify(this.questions));
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    //this.payLoad2=this.payLoad;
    this.questiont = JSON.parse(JSON.stringify(this.questions));
    console.log("Submitted data",this.questions);
  }
  cancel(){
    console.log("Canceled");
    this.questions = JSON.parse(JSON.stringify(this.questiont));
  }
  clear(){
    this.questions = JSON.parse(JSON.stringify(this.questiond));
    this.questiont = JSON.parse(JSON.stringify(this.questiond));
    console.log("Cleared");
    this.cdr.detectChanges();
  }
}
