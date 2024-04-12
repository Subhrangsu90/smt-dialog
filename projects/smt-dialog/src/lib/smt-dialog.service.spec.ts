import { TestBed } from '@angular/core/testing';

import { SmtDialogService } from './smt-dialog.service';

describe('SmtDialogService', () => {
  let service: SmtDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmtDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
