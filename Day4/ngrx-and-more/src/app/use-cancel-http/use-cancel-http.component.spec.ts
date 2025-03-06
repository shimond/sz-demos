import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCancelHttpComponent } from './use-cancel-http.component';

describe('UseCancelHttpComponent', () => {
  let component: UseCancelHttpComponent;
  let fixture: ComponentFixture<UseCancelHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseCancelHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCancelHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
