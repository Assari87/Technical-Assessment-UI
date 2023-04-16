import { Component, OnInit } from '@angular/core';
import { TargetAssetViewModel } from '../../models/target-asset-view-model';
import { FormControl } from '@angular/forms';
import { FetchAllAssetAction } from "../../state/actions";
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AssetState, AssetStateModel } from 'src/app/state/asset-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private store: Store) { }

  statistics?: { sumCpu: number; sumRam: number };
  assetList: TargetAssetViewModel[] = [];
  searchFormControl = new FormControl<string>("");
  filteredAssetList: TargetAssetViewModel[] = [];
  inProgress = false;

  @Select() assets$: Observable<AssetStateModel>;

  ngOnInit(): void {

    this.assets$.subscribe(response => {
      this.readData(response);
    });

    //this.store.dispatch(new FetchAllAssetAction());

    this.searchFormControl.valueChanges.subscribe(_ => {
      this.filterAssetList();
    });
  }

  readData(response: AssetStateModel) {

    if (response?.inProgress != undefined)
      this.inProgress = response.inProgress;

    if (response?.assetList) {
      this.assetList = response.assetList;
      this.updateAssetsData();
    }
  }

  filterAssetList() {
    let searchTerm = this.searchFormControl.value?.toLowerCase() ?? "";

    if (searchTerm)
      this.filteredAssetList = this.assetList.filter(p => p.name?.toLowerCase().indexOf(searchTerm) >= 0 || p.status?.toLowerCase().indexOf(searchTerm) >= 0)
    else
      this.filteredAssetList = this.assetList;
  };

  updateAssetsData() {
    this.statistics = {
      sumCpu: this.assetList.map(p => p.cpu).reduce((prveValue, currentValue) => prveValue + currentValue),
      sumRam: this.assetList.map(p => p.ram).reduce((prveValue, currentValue) => prveValue + currentValue)
    }
    this.assetList.map(p => {
      if (p.parentId) {
        p.parentName = this.assetList.find(q => q.id == p.parentId)?.name;
      }
    });
    this.filterAssetList();
  }

  trackByFn(index: number, asset: TargetAssetViewModel) {
    return asset.id;
  }
}

