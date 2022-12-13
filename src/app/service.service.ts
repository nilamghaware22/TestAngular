import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  url="https://localhost:44399/api/SharedComponents/GetCountryList"
  constructor(private http:HttpClient) {}
  ShowDepartment(){
    debugger
    console.log(this.url);
    return this.http.get(this.url)
  }
}
