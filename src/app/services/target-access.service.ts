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
    return this.http.get<TargetAssetViewModel[]>(`${this.apiUrl}`);
  }




}
