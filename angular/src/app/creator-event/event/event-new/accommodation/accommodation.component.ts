import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {

  categorys = [
    {value: 'Homem'},
    {value: 'Mulheres'},
    {value: 'Familia'},
  ];

  selectedValue?: string;
}
