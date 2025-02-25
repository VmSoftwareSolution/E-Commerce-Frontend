import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../../components/dialog-modal/dialog-modal.component';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-auth-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {

  loginForm: FormGroup;

  /**
   * Creates an instance of AuthLoginComponent.
   *
   * @param fb - FormBuilder for creating reactive forms.
   * @param authService - Service to handle authentication operations.
   * @param dialog - Material Dialog service to display modal dialogs.
   * @param router - Router for navigation.
   * @param tokenService - Service to handle token storage.
  */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Handles the submission of the login form.
   * It marks all controls as touched if the form is invalid.
   * If valid, it calls the AuthService to perform login, sets the token in local storage,
   * and displays a success dialog. On error, an error dialog is shown.
  */
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // Call method Login
    this.authService.login(this.loginForm.value).subscribe({
      next: (token) => {
        this.tokenService.setToken(token.token);

        const dialogRef = this.dialog.open(DialogModalComponent,{
          data: {
            tittle: 'Bienvenido',
            message: 'Usuario autenticado correctamente',
          }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['listProducts']);
        });
      },
      error: () => {
        this.dialog.open(DialogModalComponent, {
          data: {
            message: "Usuario o contraseña incorrectas",
            tittle: 'Error'
          }
        });
      }
    });
  }

  /**
   * Getter for the email form control.
   *
   * @returns The FormControl for email.
  */
  get email() {
    return this.loginForm.get('email');
  }

  /**
   * Getter for the password form control.
   *
   * @returns The FormControl for password.
  */
  get password() {
    return this.loginForm.get('password');
  }
}
