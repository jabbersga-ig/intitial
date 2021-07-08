import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-team-collaboration',
  templateUrl: './team-collaboration.component.html',
  styleUrls: ['./team-collaboration.component.scss']
})
export class TeamCollaborationComponent implements OnInit {
  public northwindCategories: any[];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindCategories = this.northwindService.getData('Categories');
  }
}
