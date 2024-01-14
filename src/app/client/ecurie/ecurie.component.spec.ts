import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcurieComponent } from './ecurie.component';

describe('EcurieComponent', () => {
  let component: EcurieComponent;
  let fixture: ComponentFixture<EcurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcurieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
