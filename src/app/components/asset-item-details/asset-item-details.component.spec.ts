import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetItemDetailsComponent } from './asset-item-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

describe('AssetItemDetailsComponent', () => {
  let component: AssetItemDetailsComponent;
  let fixture: ComponentFixture<AssetItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetItemDetailsComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        NgxsModule.forRoot([])
      ]
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
