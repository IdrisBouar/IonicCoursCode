import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() {
  }

  items=[
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    }
  ]

  ngOnInit() {
  }

}
