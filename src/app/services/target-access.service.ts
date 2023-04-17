import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { TargetAssetViewModel } from '../models/target-asset-view-model';

@Injectable({
  providedIn: 'any'
})
export class TargetAccessService {
  apiUrl = 'https://adb47d56-1aa9-4aa7-8ec2-77a923b80a5b.mock.pstmn.io/targetasset'
  constructor(private http: HttpClient) { }

  getAssetList(): Observable<TargetAssetViewModel[]> {

    return new Observable(observer => {
      setTimeout(() => {

        observer.next(JSON.parse('[{ "id": 1, "isStartable": true, "location": "Berlin", "owner": "jon.wayne@example.com", "createdBy": "christian.bale@example.com", "name": "SRVDEV01", "status": "Running", "tags": [ "dev" ], "cpu": 4, "ram": 6442450944, "createdAt": "2022-12-28T16:22:47Z", "parentId": 2 },{ "id": 2, "isStartable": true, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01", "status": "Running", "tags": [ "test", "temp" ], "cpu": 2, "ram": 6442450944, "createdAt": "2022-05-28T07:02:05Z", "parentId": null },{ "id": 3, "isStartable": true, "location": "Rome", "owner": "peter.parker@example.com", "createdBy": null, "name": "SRVPROD01", "status": "Stopped", "tags": [ "prod", "swisscom-core" ], "cpu": 8, "ram": 8589934592, "createdAt": "2022-01-18T13:26:27Z", "parentId": 0 },{ "id": 4, "isStartable": false, "location": "Switzerland", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST01 (Copy 1)", "status": "MigrationFailed", "tags": [ "test", "temp", "copy" ], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 6 },{ "id": 5, "isStartable": null, "location": "Paris", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 2)", "status": "Unknown", "tags": [ "test", "temp", "copy" ], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 4 },null,{ "id": 6, "isStartable": false, "location": "Rome", "owner": "max.power@example.com", "createdBy": "christian.bale@example.com", "name": "SRVTEST02 (Copy 3)", "status": "MigrationFailed", "tags": [ "test", "temp", "copy" ], "cpu": 2, "ram": 6442450944, "createdAt": "2022-12-29T10:14:22Z", "parentId": 1 }]'));
        observer.complete();
      }, 2000);
    })
    //return this.http.get<TargetAssetViewModel[]>(`${this.apiUrl}`);
  }


  test(){
    console.log("mamad");
  }



}
