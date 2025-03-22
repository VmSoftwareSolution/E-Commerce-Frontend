import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../../core/service/token.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  // URL for the backend to list all users
  private api = environment.apiUrl+"roles"

  constructor(
    private http:HttpClient,
    private tokenService:TokenService
  ) { }


  // COMEBACK: Handle way better
  /**
   * Retrieves the authorization headers required for making authenticated API requests.
   * This method fetches the stored JWT token and attaches it to the HTTP headers.
   *
   * @returns An instance of HttpHeaders containing the Authorization header.
   * If no token is found, an error is logged, and no headers are returned.
  */
  private getAutHeaders(){
    // Fetch the token in the local storage
    const token = this.tokenService.getToken();

    //Valid if the token is missing
    if(!token){
      return;
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAllRoles(){
    // Get the authentication headers
    const headers = this.getAutHeaders();

    // Call and return API
    return this.http.get<any[]>(this.api , {headers});
  }
}
