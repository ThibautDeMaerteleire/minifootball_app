import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-carousel-pagination',
  templateUrl: './carousel-pagination.component.html',
  styleUrls: ['./carousel-pagination.component.scss']
})
export class CarouselPaginationComponent {
  @Input() widthPercentage = 0;
}
