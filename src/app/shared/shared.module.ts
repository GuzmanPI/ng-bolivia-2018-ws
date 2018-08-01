import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { InfoComponent } from './info/info.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [InfoComponent],
  exports: [InfoComponent, FontAwesomeModule]
})
export class SharedModule {
}
