import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weight_Measurement } from '../interfaces/weight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  constructor(private http : HttpClient) { }

  public fetchLatestMeasurements(guid : string, amount : number) : Observable<Weight_Measurement[]> {
    let params = new HttpParams();
    params = params.append("latest", amount);
    return this.http
      .get<Weight_Measurement[]>(
        `https://localhost:44382/api/Measurement/${guid}`,
        {
          params
        }
      )
  }
}
