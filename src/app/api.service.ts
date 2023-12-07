import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITwoNumberResponse } from './interfaces/itwo-number-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  solveDayOne(inputs: string[]) {
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day1`, inputs);
  }
  solveDayTwo(input: string) {
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day2`, input);
  }

}

