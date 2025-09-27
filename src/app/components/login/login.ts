import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],

  
})
export class Login{
  email: string = '';
  password: string = '';
  mensaje: string = '';
  imagen = "https://tecnetone.com/hubfs/Pentesting%20Cloud.webp";
  imagen2 ="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtKRD-hcbB5AuuNpdUoNFab4egq2Ubv2Mvu6WwELxN-3sMVTSPow-zQZDY2A8t";
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
