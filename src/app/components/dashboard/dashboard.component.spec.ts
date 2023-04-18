import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NgxsModule, Store } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AssetStateModel } from 'src/app/state/asset-state';
import { Injector } from '@angular/core';
import { AssetItemComponent } from '../asset-item/asset-item.component';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let actualAssetList = [{ "id": 1, "isStartable": true, "location": "Berlin", "owner": "jon.wayne@example.com", "createdBy": "christian.bale@example.com", "name": "SRVDEV01", "status": "Running", "tags": ["dev"], "cpu": 4, "ram": 6442450944, "createdAt": "2022-12-28T16:22:47Z", "parentId": 2 }, { "id": 2, "isStartable": true, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01", "status": "Running", "tags": ["test", "temp"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-05-28T07:02:05Z", "parentId": null }, { "id": 3, "isStartable": true, "location": "Rome", "owner": "peter.parker@example.com", "createdBy": null, "name": "SRVPROD01", "status": "Stopped", "tags": ["prod", "swisscom-core"], "cpu": 8, "ram": 8589934592, "createdAt": "2022-01-18T13:26:27Z", "parentId": 0 }, { "id": 4, "isStartable": false, "location": "Switzerland", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01 (Copy 1)", "status": "MigrationFailed", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 6 }, { "id": 5, "isStartable": null, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 2)", "status": "Unknown", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 4 }, { "id": 6, "isStartable": false, "location": "Rome", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 3)", "status": "MigrationFailed", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 1 }];
  let store = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, AssetItemComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([]),
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();

    store = TestBed.inject(Store);
    store.dispatch = jest.fn(() => { });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render assets', () => {
    component.readData({ assetList: actualAssetList } as AssetStateModel)
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-asset-item ').length).toBe(6);
  });

  it('should calculate sum cpu', () => {
    component.readData({ assetList: actualAssetList } as AssetStateModel)
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#sumCpu').textContent).toBe("20");
  });
  

  it('should calculate sum ram', () => {
    component.readData({ assetList: actualAssetList } as AssetStateModel)
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#sumRam').textContent).toBe("40802189312");
  });
  
});
