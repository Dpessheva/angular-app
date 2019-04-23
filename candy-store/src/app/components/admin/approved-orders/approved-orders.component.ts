import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from '../../../core/store/app.state';
import { BaseComponent } from '../../base.component';
import { getTotalSum, toLocaleString } from '../../../core/utils/helperFunctions';
import { OrderModel } from '../../orders/models/OrderModel';
import { OrdersService } from '../../../core/services/orders/orders.service';
import { UndoOrdersRequestMade } from '../../../core/store/http/http.actions';


@Component({
  selector: 'app-approved-orders',
  templateUrl: './approved-orders.component.html',
  styleUrls: ['./approved-orders.component.css']
})
export class ApprovedOrdersComponent extends BaseComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
  protected pageSize: number = 5;
// tslint:disable-next-line: no-inferrable-types
  protected currentPage: number = 1;
  protected NotFoundMessage = 'There are no approved orders at the moment';
  protected getTotalSum = getTotalSum;
  protected toLocaleString = toLocaleString;
  protected approvedOrders: OrderModel[];
  private subscription$: Subscription;
  
  constructor(
    private store: Store<AppState>,
    private OrdersService: OrdersService) {
    super();
  }

  ngOnInit() {
    this.store.dispatch(new UndoOrdersRequestMade());
    this.OrdersService.getApprovedOrders();
    this.subscription$ = this.store.pipe(select(state => {
      if (state.http.ordersRequestMade) {
        this.approvedOrders = state.orders.approvedOrders
        .sort((a: OrderModel, b: OrderModel) => +new Date(b.date) - +new Date(a.date));
      }
    })

    );
    this.subscriptions.push(this.subscription$);
  }
  changePage(page) {
    this.currentPage = page;
  }

  trackByIds(index: number, order: OrderModel): string{
    return order._id;
  }
}
