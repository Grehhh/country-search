import { TestBed } from '@angular/core/testing';

import { CountrySearchService } from './country-search.service';

describe('CountrySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrySearchService = TestBed.get(CountrySearchService);
    expect(service).toBeTruthy();
  });
});
