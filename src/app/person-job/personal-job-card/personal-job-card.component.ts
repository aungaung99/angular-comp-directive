import { Component, Input, OnInit } from '@angular/core';
import { PersonComponent } from '../person.component';

@Component({
  selector: 'app-personal-job-card',
  templateUrl: './personal-job-card.component.html',
  styleUrls: ['./personal-job-card.component.css']
})
export class PersonalJobCardComponent implements OnInit, PersonComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
