import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
declare var window: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent implements OnInit {
  @Output() refresh: EventEmitter<number> =   new EventEmitter();
  public title = 'Edit Todo List';
  public editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    note: new FormControl('', [Validators.required,  Validators.minLength(8)]),
  })
  public todoForm: Todo = {
    id: 0,
    title: '',
    note: ''
  }
 public editModal: any;
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.edit(id)
    })
    this.editModal = new window.bootstrap.Modal(
     document.getElementById("editModal"));
  }
  public edit(id: number) {
    this.todoService.edit(id)
      .subscribe((data) => {
        this.todoForm = data
      })
  }
  public update() {
    this.todoService.update(this.todoForm)
      .subscribe({
        next: (data) => {
          window.location.reload()
        },
        error: (error) => {
          console.log(error);
        }
      })
      localStorage.setItem('TO DO LIST', JSON.stringify(this.todoForm))
      alert("Edit Success")
  }
  public closeModal(): void {
    this.refresh.emit();
  }
}
