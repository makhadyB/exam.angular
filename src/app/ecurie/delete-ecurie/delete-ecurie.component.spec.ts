import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEcurieComponent } from './delete-ecurie.component';

describe('DeleteEcurieComponent', () => {
  let component: DeleteEcurieComponent;
  let fixture: ComponentFixture<DeleteEcurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEcurieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteEcurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
