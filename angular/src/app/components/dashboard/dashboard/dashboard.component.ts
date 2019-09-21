import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  comList = ['all-post','add-post','edit-post']

  constructor() { }

  ngOnInit() {
  }

}
