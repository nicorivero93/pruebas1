import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{ name }} / {{ texto }} </h1>
  <h2 *ngIf="siOno" > Texto que Esta </h2>
  <button (click)="toggleSiONo()" > Toggle Text </button>
  <p> Desde Prop {{ objetos.propiedaduno }}</p>
  <span *ngFor="let text of listas" >{{ text }} </span>
  `,//ngFor es para generar loop de cualquier elemento
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  @Input() texto = 'Marco';
  numerillo: number;
  siOno: boolean;

  listas: Array<String | number>; //listas siempre con corchetes 
  objetos: object;

  funcionHola() {
    console.log("Hola Mundo!")
  }

  contructor () {}

  ngOnInit() {

    this.siOno = false;//true o false para que aparezca o no el objeto o texto

    this.listas = ['Texto1', 'Texto2', 12345]

    this.objetos = {//todo con dos puntos porque asi se declara dentro de objetos
      propiedaduno: 'Propi Uno',
      prop2: 'Prop 2',
      funcOne: () => {}
    }
  }


  toggleSiONo() {
    this.siOno = !this.siOno
  }
}
