import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutteurComponent } from './lutteur.component';

describe('LutteurComponent', () => {
  let component: LutteurComponent;
  let fixture: ComponentFixture<LutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
