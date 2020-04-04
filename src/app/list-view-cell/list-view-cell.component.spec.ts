import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewCellComponent } from './list-view-cell.component';

describe('ListViewCellComponent', () => {
  let component: ListViewCellComponent;
  let fixture: ComponentFixture<ListViewCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewCellComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewCellComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.data = {
      id: 1,
      title: {
        english: 'hello',
        native: 'world',
      },
      description: 'test',
      coverImage: {
        color: '#00ff00',
        medium: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
