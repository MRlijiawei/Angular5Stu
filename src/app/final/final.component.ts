import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  thankWord = "Thank u for reading, and now please reply.";
  private msg = "";
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
  
  constructor() {
    this.sendMsg = function () {
      console.log("idea:" + this.msg);
      if ("" !== this.msg) {
        this.thankWord = "Thank u for replying.";
      }
    } 
   }

  ngOnInit() {
  }

}
