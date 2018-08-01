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
export class DynamicComponentsComponent implements OnDestroy {
  private client = {
    company: 'Nike',
    type: 'Provider',
    products: [
      {
        image: '../../assets/nike1.jpg',
        name: 'Nike Zoom Pegasus Turbo',
        description: 'El Nike Zoom Pegasus Turbo es el Pegasus que conoces y te encanta con grandes mejoras para la velocidad. ' +
          'La parte superior liviana de cuero se ve tan veloz como se siente y la espuma revolucionaria de Nike ZoomX que se ' +
          'confeccionó para los corredores Nike de élite en el intento Breaking 2 brinda una velocidad y una respuesta que batió ' +
          'el récord para tus carreras de entrenamiento diarias.',
        price: '3399'
      },
      {
        image: '../../assets/nike2.jpg',
        name: 'Nike Zoom Vaporfly 4%',
        description: 'El calzado de maratón más rápido y eficiente de Nike sigue acumulando victorias. ' +
          'Los corredores Shalane Flanagan (Nueva York), Galen Rupp (Chicago), Edna Kiplagat (Boston) y ' +
          'Eliud Kipchoge (Londres, Berlín y Breaking2) son un claro ejemplo. Gracias a su espuma ZoomX superligera y ultrareactiva, ' +
          'y a su placa de fibra de carbono que te propulsa hacia delante,el VaporFly 4% está listo para conseguir todos tus objetivos.',
        price: '4799'
      },
      {
        image: '../../assets/nike3.jpg',
        name: 'Nike Air Zoom Structure 21',
        description: 'El calzado de running para hombre Nike Air Zoom Structure 21, más ligero y más resistente que la versión anterior, ' +
          'proporciona la estabilidad y el soporte que lo convirtieron en un favorito. ' +
          'El material Flymesh ligero y más suave permite que el pie se mantenga fresco, mientras la amortiguación ' +
          'Nike Zoom Air eficaz en el antepié brinda una sensación enérgica y elástica debajo del pie.',
        price: '2299'
      }
    ]
  };

  private employee = {
    firstName: 'Peter',
    lastName: 'Johnson',
    photoUrl: '../../assets/user.png',
    position: 'CTO',
    description: 'Encargado de seleccionar la mejor y mas nueva tecnología para el desarrollo de software en su empresa. ' +
      'Le gusta tocar guitarra y la cerbeza artesanal.'
  };

  @ViewChild('alertContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  createComponent(type) {
    this.container.clear();

    let factory: ComponentFactory<ClientCardComponent | EmployeeCardComponent>;

    if (type === 'success') {
      factory = this.componentFactoryResolver.resolveComponentFactory(ClientCardComponent);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.user = this.client;
    } else {
      factory = this.componentFactoryResolver.resolveComponentFactory(EmployeeCardComponent);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.user = this.employee;
    }

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
