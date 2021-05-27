import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFichaComponent } from './clientes/cliente-ficha/cliente-ficha.component';
import { ClienteComponent } from './cliente/cliente.component';




@NgModule({
  declarations: [ClientesComponent, ClienteFichaComponent, ClienteFormComponent, ClienteComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ClientesModule { }
