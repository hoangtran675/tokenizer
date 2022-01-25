import { TestBed } from '@angular/core/testing';

import { TokenizerServiceService } from './tokenizer-service.service';

describe('TokenizerServiceService', () => {
  let service: TokenizerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenizerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
