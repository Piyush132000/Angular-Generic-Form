import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-genericform',
  templateUrl: 'genericform.component.html'
})
export class GenericForm {
  @Input() Inputs: any[] = [
    {
      name: 'name',
      type: 'text',
      placeholderValue: 'Enter your name',
      formContolName: 'name',
      validation: true,
      initialValue: ''
    },
    {
      name: 'email',
      type: 'email',
      placeholderValue: 'Enter your email',
      formContolName: '',
      validation: true,
      initialValue: ''
    },
    {
      name: 'password',
      type: 'password',
      placeholderValue: 'Enter your password',
      formContolName: 'email',
      validation: 'required',
      initialValue: ''
    }
  ];
  constructor() {}

  formSubmit(userForm: NgForm) {
    console.log(userForm);
  }
}
