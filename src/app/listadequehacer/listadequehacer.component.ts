import { Component, OnInit } from '@angular/core';

interface TodoItem  {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-listadequehacer',
  templateUrl: './listadequehacer.component.html',
  styleUrls: ['./listadequehacer.component.css']
})
export class ListadequehacerComponent implements OnInit {

listaToDos: Array<TodoItem>;

  constructor() { }

  ngOnInit() {
    this.listaToDos = sessionStorage.getItem('listaToDos') ?JSON.parse(sessionStorage.getItem('listaToDos')) : [];
  }

  addOneToDo(parametro: string) {
    const todo: TodoItem = {
      text: parametro,
      done: false
    };
    this.listaToDos.push(todo);
    this.saveCurrentList();
  }
  deletOne(andex: number) {
    this.listaToDos.splice(andex, 1);
    this.saveCurrentList();
    }
  changeTodoStatus(evento: any, andex: number){
    console.log('evento', evento);
    this.listaToDos[andex].done = evento.target.checked;
    //this.listaToDos[andex].done = !this.listaToDos[andex].done;
    this.saveCurrentList();
  }
  
  saveCurrentList(){
    sessionStorage.setItem('listaToDos', JSON.stringify(this.listaToDos))

  }

buscarToDo(text: string){
  return this.listaToDos.findIndex( (elemento: TodoItem) => {elemento.text === textInput} );
}






}