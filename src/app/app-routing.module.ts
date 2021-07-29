import { GradesComponent } from './components/grades/grades.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path:'newstudent', component:RegisterComponent },
  { path:'viewstudents', component:StudentListComponent },
  { path:'newcourse', component:AddCourseComponent },
  { path:'viewcourse', component:CourseListComponent },
  { path:'profile', component: ProfileComponent},
  { path:'profile/:id/details', component: ProfileComponent, pathMatch: 'full'},
  { path:'marks/:id/:course', component: GradesComponent,pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
