import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentService } from '../../student.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //courses = ['English', 'French', 'Italian', 'Russian', 'Korean', 'Spanish'];

  courses : string[] = new Array();

  studentModel = new Student('', null, '', '', '', '', null);
  submitted = false;
  
  constructor(private _studentService: StudentService, private _router: Router) { }

  ngOnInit(): void {
    //load course name when the component is rendering
    this.getCourseNames();
  }

  getAllCourses():void{
    this._studentService.getAllCourses().subscribe(
      response => {
        this.courses = response;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getCourseNames():void{
    this._studentService.getCourseNames().subscribe(
      response => {
        this.courses = response;
      },
      error =>{
        console.log(error);
      }
    )
  }

  submitForm() {
    //console.log(this.studentModel);

    this._studentService.createStudent(this.studentModel).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        //redirect to summary page
        this._router.navigate(['/viewstudents']);
      },
      error => {
        console.log(error);
      }
    );

  }
}
