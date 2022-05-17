import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
  isSubmitted = false;
  userForm: FormGroup;
  fieldList: {field: string, errorMsg: string }[] = [
    {field: 'name', errorMsg:'Name should be two words, capitalized.' },
    {field: 'email', errorMsg:'Invalid email format.' },
    {field: 'age', errorMsg:'Age should be a number, between 18 and 99.' },
  ];

  constructor(private fb: FormBuilder,private userService: UsersService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern('^[A-Z].*$')]],
      email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      age: ['', [Validators.required,Validators.pattern('^(1[89]|[2-9]\\d)$')]]
    });
  }
  onSubmit() {
    this.isSubmitted = true;

    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value);
      this.userForm.reset();
      this.isSubmitted = false;
    }
  }

}
