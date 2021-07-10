import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = new Array();
  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.viewCourses();
  }

  //List all the courses
  viewCourses(){
    this._studentService.getAllCourses().subscribe(
      response =>{
        this.courses = response;
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    )
  }

  delete(id: number){
    this._studentService.deleteCourse(id).subscribe(
      response => {
        console.log(response);
        location.reload();
      },
      error => {
        console.log(error);
      }
    )
  }
}
