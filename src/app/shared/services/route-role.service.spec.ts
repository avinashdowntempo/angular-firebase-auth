import { TestBed, inject } from '@angular/core/testing';

import { RouteRoleService } from './route-role.service';

describe('RouteRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteRoleService]
    });
  });

  it('should be created', inject([RouteRoleService], (service: RouteRoleService) => {
    expect(service).toBeTruthy();
  }));
});
