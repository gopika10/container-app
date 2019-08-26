import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  developers = [{
    id: 1,
    name: 'Dev 1',
    description: 'Lorem Ispsum'
  }, {
    id: 2,
    name: 'Dev 2',
    description: 'Lorem Ispsum'
  }, {
    id: 3,
    name: 'Dev 3',
    description: 'Lorem Ispsum'
  }];
}
