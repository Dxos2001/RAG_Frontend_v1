import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl:'./login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string ='';
  mensaje: string = '';
  mensajeColor: string = 'red';
  

  login() {
    const user = "admin";
    const pass = "1234";

    if (this.email === user && this.password === pass) {
      this.mensaje = "Login exitoso";
      this.mensajeColor = "lime";
    } else {
      this.mensaje = "Usuario o contraseña incorrectos";
      this.mensajeColor = "red";
    }
  }
}
