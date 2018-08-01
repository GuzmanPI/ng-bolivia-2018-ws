import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" [src]="user.photoUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{user.firstName}} {{user.lastName}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{user.position}}</h6>
        <p class="card-text">{{user.description}}</p>
      </div>
    </div>
  `
})
export class EmployeeCardComponent {
  @Input() user: any;
  @Output() output = new EventEmitter();
}
