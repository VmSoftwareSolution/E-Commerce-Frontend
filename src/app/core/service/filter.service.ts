import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  /**
   * Applies a filter to the user list based on the input value.
   *
   * @param event The event triggered by the user input.
  */
  applyFilter(dataSource: MatTableDataSource<any>, filterValue: string): void {
    dataSource.filter = filterValue.trim().toLowerCase();
    if (dataSource.paginator) {
      dataSource.paginator.firstPage();
    }
  }
}
