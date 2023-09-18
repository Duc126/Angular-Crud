import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
declare var window: any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public title = 'Add Todo List';
  @Output() refresh: EventEmitter<number> = new EventEmitter();
  // public addForm!: FormGroup;
  public submitted = false;
  public createModal: any;
  public addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    note: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  todoForm: Todo = {
    id: 0,
    title: '',
    note: '',
  }
  constructor(private todoService: TodoService,
    private route: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createModal = new window.bootstrap.Modal(
      document.getElementById("addModal")
    )
  }
  public create() {
    this.todoService.create(this.todoForm)
      .subscribe({
        next: (data) => {
          window.location.reload()
        },
        error: (error) => {
          console.log(error);
        }
      })
    localStorage.setItem('TO DO LIST', JSON.stringify(this.todoForm))
    alert("Add Success")
  }
  public closeModal(): void {
    this.refresh.emit();
  }
}
