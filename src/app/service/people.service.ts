import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';

@Injectable()
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }

  GetPeople() {
    return this.http.get<Person[]>("/assets/people.json");
  }

}
