import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCombatComponent } from './liste-combat.component';

describe('ListeCombatComponent', () => {
  let component: ListeCombatComponent;
  let fixture: ComponentFixture<ListeCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
