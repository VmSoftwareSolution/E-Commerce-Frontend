import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../../core/service/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL for the backend to list all users
  private api = environment.apiUrl+"users";


  constructor(
    private http:HttpClient,
    private tokenService:TokenService
  ) { }


  /**
   * Retrieves the authorization headers required for making authenticated API requests.
   * This method fetches the stored JWT token and attaches it to the HTTP headers.
   *
   * @returns An instance of HttpHeaders containing the Authorization header.
   * If no token is found, an error is logged, and no headers are returned.
  */
  private getAuthHeaders() {
    // Find the token in the local storage
    const token = this.tokenService.getToken();

    //Valid if the token is missing
    if (!token) {
      return;
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  /**
   * Fetches the list of users from the backend API.
   * This method makes an authenticated GET request to retrieve users.
   *
   * @returns An observable that emits an array of user objects.
   * If authentication headers are missing, the request may fail.
  */
  getAllUsers(){
    //Get the authentication headers
    const headers = this.getAuthHeaders();

    //Call and return API
    return this.http.get<any[]>(this.api, {headers});
  }
}
