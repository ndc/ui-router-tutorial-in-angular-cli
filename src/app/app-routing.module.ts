import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './service/people.service';

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
    }
  ],
  useHash: true
};

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
