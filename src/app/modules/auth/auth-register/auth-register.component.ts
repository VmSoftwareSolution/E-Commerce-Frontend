import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
} from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { userRegisterModel } from '../register.model.auth';
import { DialogModalComponent } from '../../../shared/components/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-auth-register',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent {

  registerForm: FormGroup;

  /**
   * Constructor of the AuthRegisterComponent.
   * @param fb - FormBuilder to create the reactive form.
   * @param authService - Authentication service to register the user.
   * @param dialog - MatDialog service to open dialogs.
   */
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private router:Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  /**
   * Method that is executed when the form is submitted.
   * Validates the form and, if valid, registers the user.
   */
  onSubmit() {
    // Validate if the form is valid or not
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    // Set data to the userRegisterModel
    const userRegister: userRegisterModel = { ...this.registerForm.value };

    this.authService.register(userRegister).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(DialogModalComponent, {
          data: { message: 'User registered successfully!', tittle: 'User Saved Successfully' }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['login']);
        });

      },
      error: (error) => {
        this.dialog.open(DialogModalComponent, {
          data: { message: error.message, tittle: 'Error' }
        });
      }
    });
  }

  /**
   * Getter for the email control of the form.
   * @returns The email control.
   */
  get email() {
    return this.registerForm.get('email');
  }

  /**
   * Getter for the password control of the form.
   * @returns The password control.
   */
  get password() {
    return this.registerForm.get('password');
  }

  /**
   * Getter for the terms control of the form.
   * @returns The terms control.
   */
  get terms() {
    return this.registerForm.get('terms');
  }

}
