import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstComponentComponent },
  { path: 'second-page', component: SecondComponentComponent },
  { path: '', component: WelcomeComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
