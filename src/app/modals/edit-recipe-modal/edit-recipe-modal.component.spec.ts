import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { EditRecipeModalComponent } from './edit-recipe-modal.component';

describe('EditRecipeModalComponent', () => {
  let component: EditRecipeModalComponent;
  let fixture: ComponentFixture<EditRecipeModalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditRecipeModalComponent],
        imports: [IonicModule.forRoot(), CommonModule],
      }).compileComponents();

      fixture = TestBed.createComponent(EditRecipeModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
