import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../service/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  @Input() ResolveDataPerson: Person;

  ngOnInit() {
  }

}
