import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';

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
    }
  ],
  useHash: true
};

@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
