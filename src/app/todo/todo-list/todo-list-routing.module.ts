import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';
import { TodoComponent } from '../todo.component';

const routes: Routes = [{
  path: 'todo/list',
  component: TodoComponent
}, {
  path:'todo/create',
  component: CreateComponent
}, {
path: 'todo/edit/:id',
component: EditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
