import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActualiteComponent } from './liste-actualite.component';

describe('ListeActualiteComponent', () => {
  let component: ListeActualiteComponent;
  let fixture: ComponentFixture<ListeActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeActualiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
