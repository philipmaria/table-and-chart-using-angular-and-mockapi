import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private _http: HttpClient) { }
  public getTableData(): Observable<any> {
    return this._http.get("https://run.mocky.io/v3/47e49493-182d-42e5-bd33-d02c6ffc7fae");
  }

}