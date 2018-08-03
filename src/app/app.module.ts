import {BrowserModule} from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';

import {CoreModule} from '@ngmy-core/core.module';
import {SharedModule} from '@ngmy-shared/shared.module';
import {CommunicationComponent} from '@ngmy-app/communication/communication.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StructuralDirectiveComponent} from './features/structural-directive/structural-directive.component';
import {DynamicComponentsComponent} from './features/dynamic-components/dynamic-components.component';
import {CdkComponentComponent} from './features/cdk-component/cdk-component.component';
import {VcChildComponent} from './features/communication/vc-child/vc-child.component';
import {SiblingComponent} from './features/communication/sibling/sibling.component';
import {BadSiblingComponent} from './features/communication/bad-sibling/bad-sibling.component';
import {CarouselComponent} from './features/structural-directive/carousel/carousel.component';
import {CarouselDirective} from './features/structural-directive/carousel.directive';
import {ClientCardComponent} from './features/dynamic-components/client-card.component';
import {EmployeeCardComponent} from '@ngmy-app/dynamic-components/employee-card.component';
import { AlertComponent } from './features/cdk-component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    StructuralDirectiveComponent,
    DynamicComponentsComponent,
    CdkComponentComponent,
    VcChildComponent,
    SiblingComponent,
    BadSiblingComponent,
    CarouselComponent,
    CarouselDirective,
    ClientCardComponent,
    EmployeeCardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    OverlayModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClientCardComponent, EmployeeCardComponent, AlertComponent]
})
export class AppModule {
}
