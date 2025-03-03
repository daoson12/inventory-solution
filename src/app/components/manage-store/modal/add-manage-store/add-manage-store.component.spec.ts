import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManageStoreComponent } from './add-manage-store.component';

describe('AddManageStoreComponent', () => {
  let component: AddManageStoreComponent;
  let fixture: ComponentFixture<AddManageStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManageStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddManageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
