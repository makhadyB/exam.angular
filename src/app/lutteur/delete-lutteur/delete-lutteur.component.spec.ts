import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLutteurComponent } from './delete-lutteur.component';

describe('DeleteLutteurComponent', () => {
  let component: DeleteLutteurComponent;
  let fixture: ComponentFixture<DeleteLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
