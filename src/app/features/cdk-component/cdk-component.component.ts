import {Component, InjectionToken, Injector, OnInit} from '@angular/core';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {AlertComponent} from '@ngmy-app/cdk-component/alert/alert.component';

@Component({
  selector: 'app-cdk-component',
  templateUrl: './cdk-component.component.html',
  styleUrls: ['./cdk-component.component.css']
})
export class CdkComponentComponent {
}
