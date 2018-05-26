import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  list = [];


  ngOnInit() {
    const ref = {};
    this.list.push(ref);
    this.list.push(ref);
    this.list.push(ref);
  }

}
