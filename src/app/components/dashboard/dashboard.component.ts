import { Component, OnInit } from '@angular/core';
import { TargetAccessService } from '../../services/target-access.service';
import { TargetAssetViewModel } from '../../models/target-asset-view-model';
import { FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  statistics?: { sumCpu: number; sumRam: number };
  assetList: TargetAssetViewModel[] = [];
  searchFormControl = new FormControl<string>("");
  filteredAssetList: TargetAssetViewModel[] = [];

  inProgress = false;

  constructor(private targetAccessService: TargetAccessService) { }

  ngOnInit(): void {
    this.loadAssets();

    this.searchFormControl.valueChanges.subscribe(_ => {
      this.filterAssetList();
    });
  }

  filterAssetList() {
    let searchTerm = this.searchFormControl.value?.toLowerCase() ?? "";

    if (searchTerm)
      this.filteredAssetList = this.assetList.filter(p => p.name?.toLowerCase().indexOf(searchTerm) >= 0 || p.status?.toLowerCase().indexOf(searchTerm) >= 0)
    else
      this.filteredAssetList = this.assetList;
  };

  loadAssets() {
    this.inProgress = true;
    this.targetAccessService.getAssetList()
      .pipe(finalize(() => {
        this.inProgress = false
      }))
      .subscribe(response => {
        this.assetList = response?.filter(p => p != null);
        this.statistics = {
          sumCpu: this.assetList.map(p => p.cpu).reduce((prveValue, currentValue) => prveValue + currentValue),
          sumRam: this.assetList.map(p => p.ram).reduce((prveValue, currentValue) => prveValue + currentValue)
        }

        this.filterAssetList();
      })
  }

  trackByFn(index: number, asset: TargetAssetViewModel) {
    return asset.id;
  }
}

