import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpClientJsonpModule } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpHeaders} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  thankWord = "Thank u for reading, and now please reply.";
  replyId = '';
  private msg = "";
  sendUrl = "/api/sendMsg.json";
  sendMsg = function () {
    console.log(this.msg);
  }
  inputChange = function(t) {
    this.msg = t.value;
    console.log("input changed");
    if("" === t.value) {
      this.thankWord = "Thank u for reading, and now please reply.";
    }
  }
  /* replyMsg = function() {
    console.log("replying");
  } */
  constructor(private http: HttpClient, private route: ActivatedRoute, private jsonp: HttpClientJsonpModule) {
    this.sendMsg = function () {
      //捕获打印回复的信息，页面相应
      console.log("idea:" + this.msg + "to:" + this.replyId);
      if ("" !== this.msg) {
        //var that = this;
        this.thankWord = "Thank u for replying...";
       
      }
    } 
   }

  ngOnInit() {
    this.replyId = this.route.queryParams["_value"].id;
  }

}
