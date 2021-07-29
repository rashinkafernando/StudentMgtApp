import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  studentID : string = "";
  courseName : string = "";

  isSubmitted = false;

  gradeForm !: FormGroup;

  constructor(private fb: FormBuilder ,private route: ActivatedRoute,private _router:Router) {
    this.route.params.subscribe(params => {
      //console.log(params);
      this.studentID = params["id"];
      this.courseName = params["course"];
    });
   }

  ngOnInit(): void {
    this.gradeForm = this.fb.group({
      studentID : [this.studentID],
      courseName : [this.courseName],
      subject1: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      subject2: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      subject3: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      subject4: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      subject5: ['', [Validators.required,Validators.pattern("^[0-9]*$")]]
    });
  }

  submitData(){
    this.isSubmitted = true;
    if(this.gradeForm.invalid)
    {
      return
    }
    console.log(this.gradeForm.value);
    this._router.navigate(['/viewstudents']);
  }
}
