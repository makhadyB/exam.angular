import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEcurieComponent } from './add-ecurie.component';

describe('AddEcurieComponent', () => {
  let component: AddEcurieComponent;
  let fixture: ComponentFixture<AddEcurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEcurieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEcurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
