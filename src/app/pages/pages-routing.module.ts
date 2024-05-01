import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { StudentsViewComponent } from './students-view/students-view.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';

const routes: Routes = [
  {path: 'students/create', component:StudentsCreateComponent, title: 'create student'},
  {path: 'students/view', component:StudentsViewComponent, title: 'view student'},
  {path: 'students/edit', component:StudentsEditComponent, title: 'edit student'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
