import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageService } from "../message.service";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})

export class NextComponent implements OnInit {
  router = {name:"Router", id:"routeId", message:"Empty"};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.name = "routeAfterInit";
      this.router.message = this.messageService.messages;
      this.messageService.replaceMsg("replace");
      console.log(this.messageService.messages);
      this.router.message = this.messageService.messages;
    }, 2000);
  }

}
