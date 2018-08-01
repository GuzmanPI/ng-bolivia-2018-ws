import { Component, OnInit } from '@angular/core';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft;
  faChevronCircleRight = faChevronCircleRight;

  selectedImage = 0;
  images = [
    {title: 'Ciudad Perdida', url: '../../../../assets/ciudad-perdida.jpg', place: 'Colombia'},
    {title: 'Machu Picchu', url: '../../../../assets/machu-picchu.jpg', place: 'Perú'},
    {title: 'Palenque', url: '../../../../assets/palenque.jpg', place: 'México'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
