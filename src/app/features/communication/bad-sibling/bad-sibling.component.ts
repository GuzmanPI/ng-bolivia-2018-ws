import { Component, OnInit } from '@angular/core';
import {DataService} from '@ngmy-app/communication/data.service';

@Component({
  selector: 'app-bad-sibling',
  templateUrl: './bad-sibling.component.html',
  styleUrls: ['./bad-sibling.component.css']
})
export class BadSiblingComponent implements OnInit {

  message: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.dataService.changeMessage('Hola del Mal Hermano!');
  }

}
