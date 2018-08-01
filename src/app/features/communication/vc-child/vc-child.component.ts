import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-child',
  template: `
    <button type="button" class="btn btn-secondary" (click)="alert('Hola!')">Send Message from CHILD</button>
  `,
  styleUrls: ['./vc-child.component.css']
})
export class VcChildComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  alert(message: string): void {
    alert(message);
  }

}
