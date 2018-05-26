import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AtableDataSource } from './atable-datasource';

@Component({
  selector: 'atable',
  templateUrl: './atable.component.html',
  styleUrls: ['./atable.component.css']
})
export class AtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AtableDataSource(this.paginator, this.sort);
  }
}
