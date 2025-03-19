import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SlideMenuComponent } from '../../../shared/components/slide-menu/slide-menu.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { UsersService } from '../service/users.service';
import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../../../shared/components/dialog-modal/dialog-modal.component';
import { FilterService } from '../../../core/service/filter.service';
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
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements AfterViewInit {

  //Columns to be displayed in the user list
  displayedColumns: string[] = ['Email', 'Role', 'Actions'];

  //Data source for the user list
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  //Paginator and sort references
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private dialog: MatDialog,
    private filterService: FilterService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit(): void {
    //Load the users only if the platform is the browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadUsers();
    }
  }

  /**
   * Loads the list of users from the backend and assigns the data
   * to the data table.
   * This method retrieves the user list and maps the relevant fields.
   */
  loadUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (response) => {
        //Map the user data to the table data source
        this.dataSource.data = response[0].Data.map((user:any) => ({
          Email: user.email,
          Role: user.role.name,
        }));

        //Assign the paginator and sort to the dataSource
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: HttpErrorResponse) => {
        //Valid if the token is expired
        if (error.status === 403) {

          //Show message
          const dialogRef = this.dialog.open(DialogModalComponent,{
            data:{
              tittle: "Sesion Expirada",
              message: "La sesion ha expirado, por favor inicie sesion nuevamente"
            }
          })

          //Redirect to login when the message is closed
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['login']);
          });
        }
      }
    });
  }


  /**
   * Applies a filter to the user list based on the input value.
   *
   * @param event The event triggered by the user input.
  */
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterService.applyFilter(this.dataSource, filterValue);
  }
}
