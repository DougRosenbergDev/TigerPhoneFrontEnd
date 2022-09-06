import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/plans/plan';
import { Device } from 'src/app/devices/device';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id!: number;
  users: User[] = [];
  plans: Plan[] = [];
  devices: Device[] = [];
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
  //     this.plans = param['plans'];
  //   });
  // }

  // retrievePlans(): void {
  //   this.userService.getUserPlans().subscribe(plans => this.plans = plans);
  // }

  retrieveUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
