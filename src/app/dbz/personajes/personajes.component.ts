import { Component, Input } from '@angular/core';

import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  get personajes(){
    return this.dbzService.personajes;
  }
  
  constructor ( private dbzService: Dbzservice ) {}
  
  //@Input() personajes: Personaje[] = [];

}
