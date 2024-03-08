import { RequestService } from './request-service.service';
import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todo: string = '';
  public allTodos : Array<Todo> = [];
  public todosToShow : Array<Todo> = [];

  constructor(private requestService: RequestService){
  this.getAllData();
  }

  getAllData(){
    this.requestService.getAll().subscribe((response:any)=>{
      this.allTodos = response;
      this.todosToShow = [...this.allTodos];
    })
  }

  addTodo(){
    if(this.todo == ''){
      return;
    }
    const newTodo = new Todo(this.todo, false);
    this.requestService.create(newTodo).subscribe((response: any)=>{
      newTodo.id = response.id;
      this.allTodos.push(newTodo);
    this.todosToShow.push(newTodo);
    this.todo = '';
    })

  }
  filter(type:'done'|'all'|'in_progress'){
    switch(type){
      case 'done':
        this.todosToShow = this.allTodos.filter((x) => x.isChecked == true);
        break;
        case 'all':
          this.todosToShow = [...this.allTodos];
          break;
          case 'in_progress':
            this.todosToShow = this.allTodos.filter((x) => x.isChecked == false);
            break;
    }

  }
updateTooState(todo : Todo){
this.requestService.update(todo).subscribe((response:any)=>{
alert('Todo Updated!!!!')
})
}


}


export class Todo{
  public id?: string;
  public title = '';
  public isChecked = false;
  constructor(tittle:string , isChecked:boolean){
    this.title = tittle;
    this.isChecked = isChecked;
  }
 }
