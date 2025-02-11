import { Injectable } from '@angular/core';

interface Person {
  name: string;
  weight: number;
  height: number;
  imc: number;
}

@Injectable({ providedIn: 'root' })
export class IMCService {
  private persons: Person[] = [];
  private selectedPerson: Person | null = null;

  addPerson(person: Person) {
    this.persons.push(person);
  }

  getPersons() {
    return this.persons;
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }

  getSelectedPerson() {
    return this.selectedPerson;
  }
}