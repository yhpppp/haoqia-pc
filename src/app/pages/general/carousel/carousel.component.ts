import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
})
export class CarouselComponent implements OnInit {
  @Input() height: number;
  array = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}
