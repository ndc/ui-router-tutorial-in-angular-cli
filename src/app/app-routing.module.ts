import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule, Transition } from '@uirouter/angular';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './service/people.service';
import { PersonComponent } from './person/person.component';
import { Person } from './service/person';

const rootModule: RootModule = {
  states: [
    {
      name: "hello",
      url: "/hello",
      component: HelloComponent
    },
    {
      name: "about",
      url: "/about",
      component: AboutComponent
    },
    {
      name: "people",
      url: "/person",
      component: PeopleComponent,
      resolve: [
        {
          token: "ResolveDataPeople",
          deps: [PeopleService],
          resolveFn: (peopleSvc: PeopleService) => peopleSvc.GetPeople().toPromise()
        }
      ]
    },
    {
      name: "people.person",
      url: "/:personid",
      component: PersonComponent,
      resolve: [
        {
          token: "ResolveDataPerson",
          deps: [Transition, "ResolveDataPeople"],
          resolveFn: (trans: Transition, people: Person[]) => people.find(person => person.ID == trans.params().personid)
        }
      ]
    }
  ],
  useHash: true,
  otherwise: "/hello"
};

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
