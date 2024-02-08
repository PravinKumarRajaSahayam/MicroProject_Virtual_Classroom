import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AdminService 
{
  teacher = new Teacher();

  constructor(private _http : HttpClient) { }

  public addTeacher(teacher : Teacher):Observable<any>
  {
    return this._http.post<any>(`${NAV_URL}/addTeacher`,teacher);
  }

  getTotalTeachers(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalteachers`);
  }

  getTotalUsers(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalusers`);
  }

  getTotalCourses(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalcourses`);
  }

  getTotalWishlist(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalwishlist`);
  }

  getTotalEnrollments(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalenrollments`);
  }

  getTotalEnrollmentCount(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalenrollmentcount`);
  }

  getTotalChapters(): Observable<any[]> | undefined 
  {
    return this._http.get<any>(`${NAV_URL}/gettotalchapters`);
  }

}
