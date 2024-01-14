import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEcurieComponent } from './modif-ecurie.component';

describe('ModifEcurieComponent', () => {
  let component: ModifEcurieComponent;
  let fixture: ComponentFixture<ModifEcurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifEcurieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifEcurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
