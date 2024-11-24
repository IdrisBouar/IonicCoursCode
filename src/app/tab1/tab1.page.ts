import { Component, output } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: any;

  constructor() {
    fetch('./assets/movies.json')
      .then(res => res.json())
      .then(output => {alert(JSON.stringify(output)); this.movies = output;}
      )
      .catch(err => alert(err));
   
  }

}
