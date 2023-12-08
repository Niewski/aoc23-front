import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITwoNumberResponse } from './interfaces/itwo-number-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  solveDayOne(input: string) {
    // Split the string by line breaks to create array
    const preppedInput = input.split(/\r?\n/).filter(input => input.trim() !== '');
    console.log('Input: ', preppedInput);
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day1`, preppedInput);
  }
  solveDayTwo(input: string) {
    const preppedInput = input.trim();
    console.log('Input: ', preppedInput);
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day2`, preppedInput);
  }
  solveDayThree(input: string) {
    // Split the string by line breaks to create rows
    const rows = input.split(/\r?\n/).filter(input => input.trim() !== '');
    // Split each row into characters to create columns
    const preppedInput = rows.map(row => row.split(''));
    console.log('Input: ', preppedInput);
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day3`, preppedInput);
  }

}

