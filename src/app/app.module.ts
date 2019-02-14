import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { HttpClientXsrfModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NextComponent } from './next/next.component';
import { MessageService } from './message.service';
import { FinalComponent } from './final/final.component';
import { MoreComponent } from './more/more.component';
import { ElModule } from "element-angular";
import { ElementAngularComponent } from './element-angular/element-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    FinalComponent,
    MoreComponent,
    ElementAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    ElModule.forRoot()
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
