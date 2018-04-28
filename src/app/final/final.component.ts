import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from "@angular/common/http";
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
  sendUrl = "assets/sendMsg.json";
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
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.sendMsg = function () {
      //1.捕获打印回复的信息，页面相应
      console.log("idea:" + this.msg);
      if ("" !== this.msg) {
        //var that = this;
        this.thankWord = "Thank u for replying...";
        //2.使用webwork开启邮件回复发送线程
        //this.thankWord = "Thank u for replying.";
        //var worker = new Worker("messagesend.js");
        //worker.onmessage = function (event) {
          //document.getElementById('result').innerHTML += event.data + "<br/>";
          //that.thankWord = "Reply success.";
        //};
        const headers = {
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET, POST, PUT,DELETE",
          "Access-Control-Allow-Origin": "*"
        };

        //var headers = new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods");
        
        //headers.set("Access-Control-Allow-Methods", "GET, POST, PUT,DELETE");
        //headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods");
        //headers.set("Access-Control-Allow-Origin", "*");
        //2.使用post写入本地json文件
        this.http
          .post(this.sendUrl
            // + "/" + this.replyId
          , {
            "replyMsg": this.msg
          }
          , {headers}
          )
          //.subscribe(val => console.log('Value emitted successfully', val));
          .subscribe(
            //val => this.msgs = val,
            error => {
              console.error("Http failed: ", error);
              this.thankWord = "Reply failed.";
            },
            () => {
              console.log("HTTP completed.");
              this.thankWord = "Reply success.";
            }
          );
      }
    } 
   }

  ngOnInit() {
    this.replyId = this.route.queryParams["_value"].id;
  }

}
