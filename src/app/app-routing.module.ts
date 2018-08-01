import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CommunicationComponent} from '@ngmy-app/communication/communication.component';
import {StructuralDirectiveComponent} from '@ngmy-app/structural-directive/structural-directive.component';
import {DynamicComponentsComponent} from '@ngmy-app/dynamic-components/dynamic-components.component';
import {CdkComponentComponent} from '@ngmy-app/cdk-component/cdk-component.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'communication', pathMatch: 'full'},
  {path: 'communication', component: CommunicationComponent},
  {path: 'structural-directive', component: StructuralDirectiveComponent},
  {path: 'dynamic-components', component: DynamicComponentsComponent},
  {path: 'angular-cdk', component: CdkComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
