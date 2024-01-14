import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLutteurComponent } from './liste-lutteur.component';

describe('ListeLutteurComponent', () => {
  let component: ListeLutteurComponent;
  let fixture: ComponentFixture<ListeLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
