import { Component } from '@angular/core';
import { LoginClienteDTO } from '../../dto/login-cliente-dto';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginClienteDTO:LoginClienteDTO

  constructor(){
    this.loginClienteDTO=new LoginClienteDTO();
  }

  public loggearse(){

  }
}
