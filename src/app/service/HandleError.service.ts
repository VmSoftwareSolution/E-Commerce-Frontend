import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  /**
   * Handles HTTP errors and returns a user-friendly error message.
   * @param error - The HTTP error response.
   * @returns An Observable that throws an error with a user-friendly message.
   */
  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred. Please try again later.';

    if (error.error?.error) {
      const errorText: string = error.error.error.toLowerCase();

      if (errorText.includes('duplicate key value') && errorText.includes('email')) {
        errorMessage = 'The email address is already registered. Please try another one.';
      } else {
        errorMessage = error.error.error;
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
