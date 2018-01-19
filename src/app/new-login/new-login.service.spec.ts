import { TestBed, inject } from '@angular/core/testing';

import { NewLoginService } from './new-login.service';

describe('NewLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewLoginService]
    });
  });

  it('should be created', inject([NewLoginService], (service: NewLoginService) => {
    expect(service).toBeTruthy();
  }));
});
