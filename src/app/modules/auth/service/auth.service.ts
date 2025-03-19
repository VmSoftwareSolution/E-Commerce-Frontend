import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HandleErrorService } from '../../../core/service/HandleError.service';
import { userRegisterModel } from '../register.model.auth';
import { environment } from '../../../../../environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Constructor of the AuthService.
   * @param http - HttpClient to make HTTP requests.
   * @param handleError - Service to handle errors.
   */
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) { }

  // URL for the backend to register a new user
  private api = environment.apiUrl+"auth/";

  // URL for the backend to register a new user
  /**
   * Registers a new user.
   * @param registerUser - The user data to register.
   * @returns An Observable of the HTTP response.
   */
  register(registerUser: userRegisterModel): Observable<any> {
    return this.http.post(this.api+"register", registerUser).pipe(
      catchError(this.handleError.handleError)
    );
  }

  /**
   * Logs in a user.
   * @param loginUser - The login credentials for the user.
   * @returns An Observable of the HTTP response.
  */
  login(loginUser: userRegisterModel): Observable<any> {
    return this.http.post(this.api+"login", loginUser).pipe(
      catchError(this.handleError.handleError)
    );
  }

}
