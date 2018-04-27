import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  thankWord = "Thank u for reading, and now please reply.";
  private msg = "";
  sendUrl = "assets/sendmsg.json";
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
  constructor(private http: HttpClient) {
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
        //const headers = new HttpHeaders().set("Content-Type", "application/json");
        //2.使用post写入本地json文件-404
        this.http
          .put(this.sendUrl, {
            "replyMsg": this.msg
          })
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
  }

}
