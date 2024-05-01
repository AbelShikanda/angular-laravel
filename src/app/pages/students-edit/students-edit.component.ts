import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './students-edit.component.html',
  styleUrl: './students-edit.component.scss'
})
export class StudentsEditComponent {

  studentArray: any[] = [];
  isResultLoaded = false;



  name: string = "";
  address: string = "";
  phone: Number = 0;

  currentStudentID = "";


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // this.getAllStudent();

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.address = params['address'];
      this.phone = params['phone'];
      this.currentStudentID = params['id'];
    });
  }

  // register a students
  register() {

    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone": this.phone
    };

    this.http.post("http://127.0.0.1:8000/api/student", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      // console.log(resultData);
      alert("Student Registered Successfully");
      // this.getAllStudent();
      this.name = '';
      this.address = '';
      this.phone = 0;
    });
  }

  // prepair a student's record
  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentStudentID = data.id;
  }

  // update a student's record
  UpdateRecords() {
    let bodyData = {
      "id": this.currentStudentID,
      "name": this.name,
      "address": this.address,
      "phone": this.phone,

    };

    this.http.put("http://127.0.0.1:8000/api/student" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      // console.log(resultData);
      alert("Student Registered Updateddd")
      // this.getAllStudent();

    });
  }

  // save a student's record
  save() {
    if (this.currentStudentID == '') {
      this.register();
    }
    else {
      this.UpdateRecords();
    }

  }

}
