import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlansService } from '../plans.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-viewbyid',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewComponent implements OnInit {

  id! : number;
  plan!: Plan;

  constructor(
    public planservice: PlansService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.planservice.getPlan(this.id).subscribe((data: Plan)=>{
      this.plan = data;
    });
  }

}
