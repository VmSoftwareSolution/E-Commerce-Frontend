import { AfterViewInit, Component, Inject, PLATFORM_ID, viewChild, ViewChild } from '@angular/core';
import { SlideMenuComponent } from "../../../shared/components/slide-menu/slide-menu.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FilterService } from '../../../core/service/filter.service';
import { isPlatformBrowser } from '@angular/common';
import { RolesService } from '../service/roles.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogModalComponent } from '../../../shared/components/dialog-modal/dialog-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-list',
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
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent implements AfterViewInit{

  // Columns to be displayed in the roles list
  displayedColumns: string[] = ['Name', 'Description', 'Actions'];
  // Data Source for the Roles list
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // paginator nad sort references
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private rolesService:RolesService,
    private filterService:FilterService,
    private dialog: MatDialog,
    private router:Router,
    @Inject(PLATFORM_ID) private platformId:Object,
  ){}

  ngAfterViewInit(): void {
    // Load the roles only if the platform is the browser
    if(isPlatformBrowser(this.platformId)){
      // Calling method for get roles
      this.loadRoles();
    }
  }

  loadRoles(): void{
    this.rolesService.getAllRoles().subscribe({
      next: (response) =>{
        // Map the roles data to the table data source
        console.log(response)
        this.dataSource.data = response[0].Data.map((roles:any) => ({
          Name: roles.name,
          Description: roles.description,
        }));

        //Assign the paginator and sort to the dataSource
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(error: HttpErrorResponse)=>{

        //Valid if the token is expired
        if (error.status === 403){
          //Show message
          const dialogRef = this.dialog.open(DialogModalComponent,{
            data:{
              tittle: "Sesion Expirada",
              message: "La sesion ha expirado, por favor inicie sesion nuevamente"
            }
          })

          //Redirect to login when the message is close
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['login']);
          });
        }
      }
    })
  }

  /**
   * Applies a filer to the roles list based on the input value
   *
   * @param event The triggered by the roles input.
  */
  applyFilter(event:Event):void{
    const filterValue = (event.target as HTMLInputElement).value;

    //Only fetch by Name role
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.Name.toLowerCase().includes(filter);
    };

    this.filterService.applyFilter(this.dataSource, filterValue);
  }
}
