import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from "./app.routing";
import { Router } from '@angular/router';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
      AppComponent
   ], 
  providers: [ 
        { provide: LocationStrategy, useClass: HashLocationStrategy }
   ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { 
}