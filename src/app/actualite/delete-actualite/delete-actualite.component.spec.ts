import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActualiteComponent } from './delete-actualite.component';

describe('DeleteActualiteComponent', () => {
  let component: DeleteActualiteComponent;
  let fixture: ComponentFixture<DeleteActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteActualiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
