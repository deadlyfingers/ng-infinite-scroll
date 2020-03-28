import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListComponent } from './list.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { ListViewCellComponent } from '../list-view-cell/list-view-cell.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/store.module';
import { Store } from '@ngrx/store';
import * as selectors from '../store/list/list.selectors';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ListViewComponent,
        ListViewCellComponent
      ],
      imports: [
        ScrollingModule,
      ],
      providers: [
        provideMockStore(),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    store = TestBed.get(Store);

    store.overrideSelector(selectors.selectLoading, false);
    store.overrideSelector(selectors.selectListItems, []);
    store.overrideSelector(selectors.selectPage, 0);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
