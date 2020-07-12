import { SweetAlertIcon } from 'sweetalert2';
import { DialogService } from './../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { FirebaseErrors } from 'src/app/model/enums/firebase-errors.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, 
              private router: Router,
              private dialogService: DialogService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.onLogin(this.email, this.password).then(auth => {
      this.router.navigateByUrl('/home');
    }).catch(error => {
      switch (error.code) {
        
        case FirebaseErrors.user_not_found:
          this.dialogService.showMessage('Error', 'El usuario no existe, intente de nuevo por favor', 'error');
        break;

        case FirebaseErrors.wrong_password:
          alert('La contraseña es incorrecta');
          break;
      }
    });
  }

  onRegister() {
    this.authService.onRegister(this.email, this.password);
  }

}
