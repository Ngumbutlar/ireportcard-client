import {TestBed} from '@angular/core/testing';

import {StudentApplicationTrialService} from './student-application-trial.service';

describe('StudentApplicationTrialService', () => {
  let service: StudentApplicationTrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentApplicationTrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
