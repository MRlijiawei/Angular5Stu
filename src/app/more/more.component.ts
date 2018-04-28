import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  msgs = {};
  constructor(private http: HttpClient) {}

  url = "assets/messages.json";
  /* getConfig() {
    this.msgs = this.http.get(this.url);
  } */
  ngOnInit() {
    this.msgs = this.http
      .get(this.url)
      //.subscribe(val => console.log('Value emitted successfully', val));
      .subscribe(
        val => this.msgs = val,
        error => {
          console.error("Http failed: ", error);
        },
        () => console.log("HTTP completed.")
      );
  }

}
