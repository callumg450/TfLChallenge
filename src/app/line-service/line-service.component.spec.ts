import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineServiceComponent } from './line-service.component';

describe('LineServiceComponent', () => {
  let component: LineServiceComponent;
  let fixture: ComponentFixture<LineServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
