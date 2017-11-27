import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
  }

  OpenAPerson() {
    this.state.go("people.person", { personid: 293 }, { reload: true });
  }

}
