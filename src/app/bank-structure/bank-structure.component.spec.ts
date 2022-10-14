import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStructureComponent } from './bank-structure.component';

describe('BankStructureComponent', () => {
  let component: BankStructureComponent;
  let fixture: ComponentFixture<BankStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
