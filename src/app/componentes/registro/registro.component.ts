import { Component } from '@angular/core';
import { RegistroClienteDTO } from '../../dto/registro-cliente-dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  ciudades: string[];
  archivos!:FileList;

  registroClienteDTO: RegistroClienteDTO;
  constructor() {
  this.registroClienteDTO = new RegistroClienteDTO();
  this.ciudades=[];
  this.cargarCiudades();
  }

  public registrar() {
    if (this.registroClienteDTO.fotoPerfil != "") {
    console.log(this.registroClienteDTO);
    } else {
    console.log("Debe cargar una foto");
    }
    }

  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmaPassword;
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
    }
    }

  private cargarCiudades() {
    this.ciudades = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"];
  }
}
