import { TestBed, inject } from '@angular/core/testing';

import { ProcessorService } from './processor.service';

describe('ProcessorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessorService]
    });
  });

  it('should be created', inject([ProcessorService], (service: ProcessorService) => {
    expect(service).toBeTruthy();
  }));
});
