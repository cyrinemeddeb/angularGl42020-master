import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbauchesService {

  personnesEmbauchees: Personne[] = [];
  constructor() { }

  embaucherPersonne(personne : Personne){
    this.personnesEmbauchees.push(personne);
  }

  getPersonnesEmbauchees(){
    return this.personnesEmbauchees;
  }
}
