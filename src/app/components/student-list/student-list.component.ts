import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  //array of students
  students: Student[] = new Array();
  myColor = "green";
  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.viewStudents();
  }

  //List all the students
  viewStudents(){
    this._studentService.getAllStudents().subscribe(
      response =>{
        this.students = response;
        console.log(this.students);
      },
      error => {
        console.log(error);
      }
    )
  }
}
