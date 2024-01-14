import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEcurieComponent } from './liste-ecurie.component';

describe('ListeEcurieComponent', () => {
  let component: ListeEcurieComponent;
  let fixture: ComponentFixture<ListeEcurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEcurieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEcurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
