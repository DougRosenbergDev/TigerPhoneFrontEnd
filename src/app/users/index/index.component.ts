import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: User[] = [];
  // id!: number;

  // ask angular to inject musicService
  constructor(
    private userService: UsersService,
    private rout: ActivatedRoute,
    private router: Router  
  ) {}

  ngOnInit(): void {
    this.retrieveUsers();
    // this.retrievePlans();
  }

  // retrievePlans(): void {
  //   this.rout.queryParams.subscribe(param => {
  //     this.id = param['userId'];
  //   });
  // }

  retrieveUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
