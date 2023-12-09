import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITwoNumberResponse } from './interfaces/itwo-number-response.interface';
import { parseStringToAlmanac } from './utils/parse.utils';

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
  solveDayFour(input: string) {
    // Split the string by line breaks to create rows
    let rows = input.split(/\r?\n/).filter(input => input.trim() !== '');
    // Split each row into characters to create columns
    rows = rows.map(row => {
      const [, secondPart] = row.split(':');
      return secondPart || ''; // Fallback in case there's no second part
    });
    // Split by bar, then spaces, and trim whitespace
    const parts = rows.map(row => row.split('|').map(part => part.trim().split(/\s+/)));
    // Filter out empty strings
    const preppedParts = parts.map(part => part.filter(str => str));
    // Map to numbers
    const preppedInput = preppedParts.map((curr) => ({
      winningNumbers: curr[0].map(numStr => +numStr),
      myNumbers: curr[1].map(numStr => +numStr)
    }));
    console.log('Input: ', preppedInput);
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day4`, preppedInput);
  }
  solveDayFive(input: string) {
    const preppedInput = parseStringToAlmanac(input);
    console.log('Input: ', preppedInput);
    return this.http.post<ITwoNumberResponse>(`${this.baseUrl}/day5`, preppedInput);
  }
}

