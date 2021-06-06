import { Component, OnInit } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faBed, faBone, faDog, faUser, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/administracion/models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser =faUser;
  faDog = faDog;
  faBed = faBed;
  faBone = faBone;
  faUsersCog = faUsersCog;
  faDotCircle = faDotCircle;
  usuarios: Usuario [] = [{id: 1, nombre:'jose', password:'1234', tipo:'administrador'}, {id:2, nombre:'jorge', password:'1234', tipo:'empleado'}];

  logged: boolean = false;
  admin: boolean = false;
  nombreUsuario: string ='';
  password: string = '';
  tipoUsuario: string = '';


  constructor() { }

  ngOnInit() {
  }

  comprobarLogging(): void {
    for (let usuario of this.usuarios) {
      if (usuario.nombre === this.nombreUsuario) {
        console.log("prueba");

        if (usuario.password === this.password) {
          this.logged = true;
          this.tipoUsuario = (usuario.tipo === 'administrador') ? 'administrador' : 'empleado';
          this.admin = (usuario.tipo === 'administardor');
        }
      }
    }
  }

  cerrarSesion(): void {
    this.logged = false;
    this.admin = false;
    this.nombreUsuario ='';
    this.password = '';
    this.tipoUsuario = '';
  }
}
