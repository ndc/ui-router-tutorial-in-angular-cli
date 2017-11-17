import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../service/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  @Input() ResolveDataPeople: Person[];

  ngOnInit() {
  }

}
