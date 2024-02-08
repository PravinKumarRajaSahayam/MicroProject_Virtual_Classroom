import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher';
import { User } from '../models/user';

const NAV_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user = new User();
  teacher = new Teacher();

  constructor(private _http : HttpClient) { }

public registerUserFromRemote(user : User):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registeruser`,user)
}

public registerTeacherFromRemote(teacher : Teacher):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}/registerteacher`,teacher)
}

}
