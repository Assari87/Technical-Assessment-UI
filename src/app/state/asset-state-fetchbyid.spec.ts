import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AssetState } from './asset-state';
import { FetchAllAssetAction } from './FetchAllAssetAction';
import { TargetAccessService } from '../services/target-access.service'
import { Observable, of } from 'rxjs';
import { TargetAssetViewModel } from '../models/target-asset-view-model';
import { HttpClientModule } from '@angular/common/http';
import { SelectAssetAction } from './SelectAssetAction';


describe('AssetStateFetch', () => {
    let store: Store;
    let service: TargetAccessService;

    let actualAssetList = [{ "id": 1, "isStartable": true, "location": "Berlin", "owner": "jon.wayne@example.com", "createdBy": "christian.bale@example.com", "name": "SRVDEV01", "status": "Running", "tags": ["dev"], "cpu": 4, "ram": 6442450944, "createdAt": "2022-12-28T16:22:47Z", "parentId": 2 }, { "id": 2, "isStartable": true, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01", "status": "Running", "tags": ["test", "temp"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-05-28T07:02:05Z", "parentId": null }, { "id": 3, "isStartable": true, "location": "Rome", "owner": "peter.parker@example.com", "createdBy": null, "name": "SRVPROD01", "status": "Stopped", "tags": ["prod", "swisscom-core"], "cpu": 8, "ram": 8589934592, "createdAt": "2022-01-18T13:26:27Z", "parentId": 0 }, { "id": 4, "isStartable": false, "location": "Switzerland", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01 (Copy 1)", "status": "MigrationFailed", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 6 }, { "id": 5, "isStartable": null, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 2)", "status": "Unknown", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 4 }, null, { "id": 6, "isStartable": false, "location": "Rome", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 3)", "status": "MigrationFailed", "tags": ["test", "temp", "copy"], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 1 }];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                NgxsModule.forRoot([AssetState])]
        });

        store = TestBed.inject(Store);
        service = TestBed.inject(TargetAccessService);

        service.getAssetList = jest.fn(() => of<any>(actualAssetList));
    });


    it('it retuns asset by id', () => {
        jest.spyOn(service, 'getAssetList').mockReturnValue(of(actualAssetList));
        store.dispatch(new FetchAllAssetAction());
        store.dispatch(new SelectAssetAction(1));
        const asset = store.selectSnapshot(state => state.assets.selectedAsset);
        
        expect(asset).toBeTruthy();
        expect(asset.id).toBe(1);
    });
});