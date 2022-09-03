import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: Plan[] = [];

  // ask angular to inject musicService
  constructor(private planService: PlansService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.planService.getPlans().subscribe(plans => this.plans = plans);
  }

}
