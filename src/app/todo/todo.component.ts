import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'
import { MatPaginator } from '@angular/material/paginator';

declare var window: any;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  @ViewChild('createView')
  createView!: CreateComponent;
  @ViewChild('editView')
  editView!: EditComponent;
  @Output() refresh: EventEmitter<number> = new EventEmitter();
  public deleteModal: any;
  public title = 'Edit Todo List';
  public searchText!: string;
  public allTodo: Todo[] = [];
  public item: any;
  public paginater: number = 1;
  public idDelete: number = 0;
  public idEdit: number = 0;
  public editModal: any;
  public validateModal: any;


  public formValidate = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  public todoForm: Todo = {
    id: 0,
    title: '',
    note: ''
  }
  public form: any;
  public formBuilder: any;


  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.validateModal = new window.bootstrap.Modal(
      document.getElementById("validateModal")
    )
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.editModal = new window.bootstrap.Modal(
      document.getElementById("editModal")
    )
    this.get();
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.edit(id)
    })
  }
  public get() {
    this.todoService.get()
      .subscribe((data) => {
        this.allTodo = data;
      })
  }
  public openDeleteModal(id: number) {
    this.idDelete = id;
    this.deleteModal.show();

  }

  public delete() {
    this.todoService.delete(this.idDelete)
      .subscribe((data) => {
        this.allTodo = this.allTodo.filter(_ => _.id !== this.idDelete);
        this.deleteModal.hide();
      })
    localStorage.setItem('TO DO LIST', JSON.stringify(this.todoForm))
    alert("Delete Success")
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
          // this.router.navigate(["/todo/list"]);
          window.location.reload()
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  public onSubmit() {
    alert(JSON.stringify(this.formValidate.value))
  }
  public openValidate() {
    this.validateModal.show();
  }
  public openCreate() {
    this.createView.createModal.show()
  }
  public openEdit(id: number) {
    this.edit(id)
    this.editView.editModal.show()
  }
  public closeModal(): void {
    this.refresh.emit();
  }
}
