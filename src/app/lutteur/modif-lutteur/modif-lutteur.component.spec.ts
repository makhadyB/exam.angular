import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLutteurComponent } from './modif-lutteur.component';

describe('ModifLutteurComponent', () => {
  let component: ModifLutteurComponent;
  let fixture: ComponentFixture<ModifLutteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifLutteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifLutteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
