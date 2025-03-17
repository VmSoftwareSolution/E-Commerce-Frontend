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
    let errorMessage = 'Ocurrio un error, porfavor intente mas tarde.';

    if (error.error?.error) {
      const errorText: string = error.error.error.toLowerCase();

      if (errorText.includes('duplicate key value') && errorText.includes('email')) {
        errorMessage = 'El email ya esta registrado, porfavor intente con uno nuevo.';
      } else {
        errorMessage = error.error.error;
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
