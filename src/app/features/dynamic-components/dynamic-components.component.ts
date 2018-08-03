import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ClientCardComponent} from '@ngmy-app/dynamic-components/client-card.component';
import {EmployeeCardComponent} from '@ngmy-app/dynamic-components/employee-card.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent {
}
