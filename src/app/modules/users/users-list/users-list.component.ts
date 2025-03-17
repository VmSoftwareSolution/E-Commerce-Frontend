import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SlideMenuComponent } from '../../../shared/components/slide-menu/slide-menu.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

export interface UserData {
  id: string;
  name: string;
  roles: string;
}

/** Constants used to fill up our data base. */
const Roles: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const Emails: string[] = [
  'Maia@gmail.com',
  'Asher@gmail.com',
  'Olivia@gmail.com',
  'Atticus@gmail.com',
  'Amelia@gmail.com',
  'Jack@gmail.com',
  'Charlotte@gmail.com',
  'Theodore@gmail.com',
  'Isla@gmail.com',
  'Oliver@gmail.com',
  'Isabella@gmail.com',
  'Jasper@gmail.com',
  'Cora@gmail.com',
  'Levi@gmail.com',
  'Violet@gmail.com',
  'Arthur@gmail.com',
  'Mia@gmail.com',
  'Thomas@gmail.com',
  'Elizabeth@gmail.com',
];


@Component({
  selector: 'app-users-list',
   imports: [
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatIconModule,
      SlideMenuComponent,
      NavbarComponent
    ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Email', 'Role', 'Actions'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator)paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor() {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }

    //COMEBACK: Missing Documentation
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name =
      Emails[Math.round(Math.random() * (Emails.length - 1))] +
      ' ' ;

    const roles =
      Roles[Math.round(Math.random() * (Roles.length - 1))] +
      ' ' ;
    return {
      id: id.toString(),
      name: name,
      roles: roles,
    };
}
