import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchFeComponent } from './switch-fe.component';

describe('SwitchFeComponent', () => {
  let component: SwitchFeComponent;
  let fixture: ComponentFixture<SwitchFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchFeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
