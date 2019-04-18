import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState }

@Component({
  selector: 'app-approved-orders',
  templateUrl: './approved-orders.component.html',
  styleUrls: ['./approved-orders.component.css']
})
export class ApprovedOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
