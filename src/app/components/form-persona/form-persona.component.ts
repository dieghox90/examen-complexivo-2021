import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(private router:Router,private servicio:PersonaService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //Crear
    if (!this.router.url.includes('editar')) {
      return;
    }

    //Editar
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.servicio.buscarPorId(id))
      )
      .subscribe(p => this.persona = p )
  }

  guardar() {
    this.servicio.crear(this.persona).subscribe(p => {
      alert("Persona creada con 'exito : "+p.nombre);
    });
  }

}
