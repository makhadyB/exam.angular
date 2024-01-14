import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCombatComponent } from './delete-combat.component';

describe('DeleteCombatComponent', () => {
  let component: DeleteCombatComponent;
  let fixture: ComponentFixture<DeleteCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCombatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
