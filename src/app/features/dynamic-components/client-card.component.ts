import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Client} from '@ngmy-data-models/models';

@Component({
  selector: 'app-alert',
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{user.company}}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" *ngFor="let product of user.products">{{product.name}}</li>
      </ul>
    </div>
    <br/>
    <div class="card-group">
      <div class="card" *ngFor="let product of user.products">
        <img class="card-img-top" [src]="product.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description}}</p>
          <p class="card-text"><small class="text-muted">{{product.price | currency}}</small></p>
        </div>
      </div>
    </div>
  `
})
export class ClientCardComponent {
  @Input() user: Client;
  @Output() output = new EventEmitter();
}
