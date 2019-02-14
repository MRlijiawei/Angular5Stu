import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ElModule } from "element-angular";

@Component({
  selector: 'app-element-angular',
  templateUrl: './element-angular.component.html',
  styleUrls: ['./element-angular.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElementAngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
