import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-view.component.html',
  styleUrl: './students-view.component.scss'
})
export class StudentsViewComponent {

  studentsArray: any[] = [];
  isResultLoaded = false;



  name: string = "";
  address: string = "";
  phone: Number = 0;

  currentStudentID = "";


  constructor(private http: HttpClient, private router: Router) {
    this.getAllStudent();

  }

  // get all students
  getAllStudent() {

    this.http.get("http://127.0.0.1:8000/api/student").subscribe((resultData: any) => {
      this.isResultLoaded = true;
      // console.log(resultData);
      this.studentsArray = resultData;
    });
  }

  // prepair a student's record
  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentStudentID = data.id;

    this.router.navigate(['/students/edit'], {
      skipLocationChange: true,
      queryParams: {
        name: data.name,
        address: data.address,
        phone: data.phone,
        id: data.id
      }
    });
  }

  // delete a student's record
  setDelete(data: any) {


    this.http.delete("http://127.0.0.1:8000/api/student" + "/" + data.id, { responseType: 'text' }).subscribe((resultData: any) => {
      // console.log(resultData);
      alert("Student Deleteddd")
      this.getAllStudent();
      this.name = '';
      this.address = '';
      this.phone = 0;

    });

  }

}
