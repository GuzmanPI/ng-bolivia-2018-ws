import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {VcChildComponent} from '@ngmy-app/communication/vc-child/vc-child.component';
import {DataService} from '@ngmy-app/communication/data.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements AfterViewInit, OnInit {
  message: string;

  @ViewChild(VcChildComponent) child;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  sendAlert(): void {
    this.child.alert('Hola NG BOLIVIA!');
  }

  newMessage() {
    this.dataService.changeMessage('Hola del Papá!');
  }
}
