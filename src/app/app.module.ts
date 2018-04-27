import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NextComponent } from './next/next.component';
import { MessageService } from './message.service';
import { FinalComponent } from './final/final.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    FinalComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
