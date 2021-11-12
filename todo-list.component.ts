import { Component, OnInit } from '@angular/core';
import { TodoservService } from '../todoserv.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public employees:any=[]

  constructor(private empl1:TodoservService) { }

  ngOnInit(): void {
    this.employees=this.empl1.getEmployee()
  }

}
