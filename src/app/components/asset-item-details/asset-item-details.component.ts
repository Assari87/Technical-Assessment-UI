import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TargetAssetViewModel } from 'src/app/models/target-asset-view-model';
import { SelectAssetAction } from '../../state/SelectAssetAction';
import { AssetStateModel } from 'src/app/state/asset-state';

@Component({
  selector: 'app-asset-item-details',
  templateUrl: './asset-item-details.component.html',
  styleUrls: ['./asset-item-details.component.scss']
})
export class AssetItemDetailsComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute, private store: Store) { }

  assetInfo: TargetAssetViewModel;
  assetId?: number;
  errorMessage: string;
  inProgress = false;

  @Select() assets$: Observable<AssetStateModel>;

  ngOnInit(): void {
    this.getIdParameter();
  }

  getIdParameter() {
    this.route.params.subscribe((params: Params) => {
      this.assetId = params['id'] ? parseInt(params['id']) : null;

      this.assets$.subscribe(response => {
        if (response?.inProgress != undefined)
          this.inProgress = response.inProgress;
        
        this.assetInfo = response?.selectedAsset
      });

      this.store.dispatch(new SelectAssetAction(this.assetId));

    });
  }

}
