import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SWorkerComponent } from './s-worker.component';

describe('SWorkerComponent', () => {
  let component: SWorkerComponent;
  let fixture: ComponentFixture<SWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
