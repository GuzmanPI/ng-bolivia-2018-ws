import {Component, InjectionToken, Injector, OnInit} from '@angular/core';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {AlertComponent} from '@ngmy-app/cdk-component/alert/alert.component';

@Component({
  selector: 'app-cdk-component',
  templateUrl: './cdk-component.component.html',
  styleUrls: ['./cdk-component.component.css']
})
export class CdkComponentComponent implements OnInit {

  constructor(private overlay: Overlay) {
  }

  ngOnInit() {
  }

  open(): void {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block()
    });

    const overlayRef: OverlayRef = this.overlay.create(overlayConfig);
    const userProfilePortal = new ComponentPortal(AlertComponent);
    overlayRef.attach(userProfilePortal);
  }
}
