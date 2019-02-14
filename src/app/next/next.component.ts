import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { MessageService } from "../message.service";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NextComponent implements OnInit {
  router = {name:"Router", id:"routeId", msg:"Empty"};

  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    //let a = this.route.queryParams["id"];
    let obj = this.route.queryParams["_value"];
    console.log(obj);
    if(obj && obj.id) {
      this.router = obj;
    } else {
      setTimeout(() => {
        this.router.name = "routeAfterInit";
        this.router.msg = this.messageService.messages;
        this.messageService.replaceMsg("replace");
        console.log(this.messageService.messages);
        this.router.msg = this.messageService.messages;
      }, 2000);
    }
    /* this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        console.log(this.id);
        console.log('传值');
        console.log(params)
      }) */
  }

}
