import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  solveDayOne(inputs: string[]) {
    return this.http.post<number>(`${this.baseUrl}/day1`, inputs);
  }

}

