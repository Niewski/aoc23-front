import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('solveDayOne should make POST request', () => {
    const testResponse  = 10;
    const testInput = ['input1', 'input2'];

    service.solveDayOne(testInput).subscribe(data => {
      expect(data).toEqual(testResponse );
    });

    const req = httpTestingController.expectOne('http://localhost:8080/api/day1');
    expect(req.request.method).toEqual('POST');
    req.flush(testResponse );
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
