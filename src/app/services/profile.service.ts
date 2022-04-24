import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  public createProfile(profilename : string) : Observable<Profile> {
    return this.http
      .post<Profile>(
        `https://localhost:44382/api/Profile`,
        { 
          "name": profilename 
        },
        {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
      )
  }
  public fetchProfiles() : Observable<Profile[]>  {
    return this.http
      .get<Profile[]>(
        "https://localhost:44382/api/Profile"
      )
  }
  public fetchProfile(guid : string) : Observable<Profile> {
    return this.http
      .get<Profile>(
        `https://localhost:44382/api/Profile/${guid}`
      )
  }
}
