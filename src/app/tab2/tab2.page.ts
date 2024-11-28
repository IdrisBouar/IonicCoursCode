import { Component } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sort: any = 'multi';
  public columns: any;
  public rows: any;

  constructor() {

    this.columns = [
      { name: 'Name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];

    fetch('./assets/movies.json')
      .then(res => res.json())
      .then(output => {alert(JSON.stringify(output)); this.rows = output;}
      )
      .catch(err => alert(err));
  }
}
