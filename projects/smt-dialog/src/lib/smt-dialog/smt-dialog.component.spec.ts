import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtDialogComponent } from './smt-dialog.component';

describe('SmtDialogComponent', () => {
  let component: SmtDialogComponent;
  let fixture: ComponentFixture<SmtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmtDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
