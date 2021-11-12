import { Component, OnInit } from '@angular/core';
import { TodoservService } from '../todoserv.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public employees:any=[]

  constructor(private empl2:TodoservService) { }

  ngOnInit(): void {
    this.employees=this.empl2.getEmployee()
  }

}
