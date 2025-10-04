import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  mensaje = signal('');
  mensajeColor = signal('red');

  imagen2 ="https://media.istockphoto.com/id/1200064810/vector/user-profile-login-or-access-authentication-icon-button-people-account-sign-in-logo-sign.jpg?s=170667a&w=0&k=20&c=O-JtGX3Joqxy9tJfwQVznmu6j85yhQdd-kZ3sb2BEqM="; // tu base64

  updateEmail(event: Event) {
    this.email.set((event.target as HTMLInputElement).value);
  }

  updatePassword(event: Event) {
    this.password.set((event.target as HTMLInputElement).value);
  }

  login() {
    const user = "admin";
    const pass = "1234";

    if (this.email() === user && this.password() === pass) {
      this.mensaje.set("Login exitoso");
      this.mensajeColor.set("lime");
    } else {
      this.mensaje.set("Usuario o contraseña incorrectos");
      this.mensajeColor.set("red");
    }
  }
}
