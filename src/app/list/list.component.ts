import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: {name: string, email: string, age: string}[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.users.subscribe(users => this.users = users);
  }

}
