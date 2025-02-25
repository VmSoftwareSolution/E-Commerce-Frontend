import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Retrieves the JWT token stored in the AuthLoginComponent.
   *
   * @returns The token as a string if found, otherwise null.
   */
  public getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null; // Prevents errors in SSR
    }

    return localStorage.getItem('jwToken');
  }

  /**
   * Stores the JWT token in local storage.
   *
   * @param token - The token to be stored.
   */
  public setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('jwToken', token);
    }
  }

  /**
   * Removes the JWT token from local storage.
   */
  public removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('jwToken');
    }
  }
}
