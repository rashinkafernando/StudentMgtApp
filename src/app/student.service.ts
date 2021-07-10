import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './classes/course';
import { Student } from './classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url = "https://localhost:44394/api/"; 

  constructor(private _http: HttpClient) { }

  //Student methods  

  //Create student
  createStudent(studentObj: Student): Observable<any>{
    return this._http.post(this._url + 'student', studentObj);
  }

  //Get all students
  getAllStudents(): Observable<any>{
    return this._http.get(this._url + 'student');
  }

  //Course methods

  //create course
  createCourse(courseData : any): Observable<any>{
    return this._http.post(this._url + 'course',courseData);
  }

  //get all courses
  getAllCourses(): Observable<any>{
    return this._http.get(this._url + 'course');
  }

  //get course names
  getCourseNames(): Observable<any> {
    return this._http.get(this._url + 'course/CourseNames');
  }

  //delete course
  deleteCourse(id: number): Observable<any>{
    return this._http.delete(this._url + 'course/',id);
    );
  }
}
