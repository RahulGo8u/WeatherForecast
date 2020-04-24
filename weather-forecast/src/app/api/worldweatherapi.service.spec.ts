import { TestBed } from '@angular/core/testing';

import { WorldweatherapiService } from './worldweatherapi.service';

describe('WorldweatherapiService', () => {
  let service: WorldweatherapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldweatherapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
