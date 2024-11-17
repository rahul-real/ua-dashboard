import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSAComponent } from './dsa.component';

describe('DSAComponent', () => {
  let component: DSAComponent;
  let fixture: ComponentFixture<DSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DSAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
