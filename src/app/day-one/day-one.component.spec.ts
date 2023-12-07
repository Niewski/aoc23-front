import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { DayOneComponent } from './day-one.component';

describe('DayOneComponent', () => {
  let component: DayOneComponent;
  let fixture: ComponentFixture<DayOneComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DayOneComponent, HttpClientTestingModule, FormsModule ],
      providers: [ ApiService ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayOneComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call solveDayOne method of ApiService on submit', () => {
    const inputString = '1abc2 pqr3stu8vwx';
    const separator = ' ';
    const apiServiceSpy = spyOn(apiService, 'solveDayOne').and.callThrough();
  
    component.inputString = inputString;
    component.separator = separator;
    component.submit();
  
    expect(apiServiceSpy).toHaveBeenCalledWith(inputString.split(separator));
  });
});
