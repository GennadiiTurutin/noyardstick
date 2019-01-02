import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesearchComponent } from './archivesearch.component';

describe('ArchivesearchComponent', () => {
  let component: ArchivesearchComponent;
  let fixture: ComponentFixture<ArchivesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
