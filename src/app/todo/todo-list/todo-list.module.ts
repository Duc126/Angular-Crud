import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, NgForm } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from '../create/create.component';
import { TodoComponent } from '../todo.component';
import { EditComponent } from '../edit/edit.component';
import { MatTableModule } from '@angular/material/table';
import { NgMaterialModule } from 'src/ ng-material.module'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TodoComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgMaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class TodoListModule { }
