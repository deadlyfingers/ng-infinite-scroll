import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PageService } from './page.service';

describe('PageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: PageService = TestBed.get(PageService);
    expect(service).toBeTruthy();
  });
});
