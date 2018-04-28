import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NextComponent } from './next/next.component';
import { AppComponent } from "./app.component";
import { FinalComponent } from "./final/final.component";
import { MoreComponent } from "./more/more.component";

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'next/:id', component: NextComponent },
  { path: 'next', component: NextComponent },
  { path: 'more', component: MoreComponent },
  { path: 'final', component: FinalComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
