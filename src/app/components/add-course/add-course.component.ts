import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  registerCourseForm = this.fb.group({
    courseName : [''],
    subject1: [''],
      subject2: [''],
      subject3: [''],
      subject4: [''],
      subject5: [''],
  });

  submitted = false;

  constructor(private fb: FormBuilder, private _studentService: StudentService, private _router: Router) { }

  ngOnInit(): void {
   
  }
 
  submitForm(){

    console.log(this.registerCourseForm.value);
    this._studentService.createCourse(this.registerCourseForm.value).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        //redirect to summary page
        this._router.navigate(['/viewcourse']);
      },
      error => {
        console.log(error);
      }
    )

    
  }
  
}
