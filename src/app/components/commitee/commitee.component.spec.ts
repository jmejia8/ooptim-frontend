import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommiteeComponent } from './commitee.component';

describe('CommiteeComponent', () => {
  let component: CommiteeComponent;
  let fixture: ComponentFixture<CommiteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommiteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
