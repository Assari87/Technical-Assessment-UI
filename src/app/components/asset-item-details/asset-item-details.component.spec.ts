import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetItemDetailsComponent } from './asset-item-details.component';

describe('AssetItemDetailsComponent', () => {
  let component: AssetItemDetailsComponent;
  let fixture: ComponentFixture<AssetItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
