import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  show = false;
  faBars = faBars;
  faTimes = faTimes;
  links = [
    {text: 'Comunicación', url: 'communication'},
    {text: 'Directivas Estructurales', url: 'structural-directive'},
    {text: 'Componentes Dinámicos', url: 'dynamic-components'},
    {text: 'angular CDK', url: 'angular-cdk'}
  ];

  constructor(public router: Router) {
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
