import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private servicio:PersonaService) { }

  ngOnInit(): void {

    this.servicio.listar().subscribe(lista => {
      this.personas = lista;
    });

  }

  eliminar(id:string) {
    this.servicio.delete(id).subscribe(() => {
      alert("Usuario eliminado con exito");
      
      this.servicio.listar().subscribe(lista => {
        this.personas = lista;
      });
    });
  }

}
