import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }
  public getCovidData():Observable<any>{
    return this.http.get("https://api.covid19api.com/summary");
  }
}
