import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCombatComponent } from './modif-combat.component';

describe('ModifCombatComponent', () => {
  let component: ModifCombatComponent;
  let fixture: ComponentFixture<ModifCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
