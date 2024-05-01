import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentsCreateComponent } from './students-create/students-create.component';
import { StudentsViewComponent } from './students-view/students-view.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    StudentsCreateComponent,
    StudentsViewComponent
  ]
})
export class PagesModule { }
