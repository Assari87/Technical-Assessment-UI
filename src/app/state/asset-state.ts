import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { TargetAssetViewModel } from "../models/target-asset-view-model";
import { Injectable } from "@angular/core";
import { TargetAccessService } from "../services/target-access.service";
import { SelectAssetAction } from "./SelectAssetAction";
import { FetchAllAssetAction } from "./FetchAllAssetAction";

export class AssetStateModel {
    inProgress: boolean;
    assetList: TargetAssetViewModel[];
    selectedAsset: TargetAssetViewModel;
}

@State<AssetStateModel>({
    name: 'assets',
    defaults: {
        inProgress: false,
        assetList: [],
        selectedAsset: <TargetAssetViewModel>{}
    },
})
@Injectable()
export class AssetState implements NgxsOnInit {
    constructor(private targetAccessService: TargetAccessService) { }

    ngxsOnInit(ctx: StateContext<AssetStateModel>): void {
    }

    @Action(FetchAllAssetAction)
    FetchAllAsset(ctx: StateContext<AssetStateModel>, { selectedAssetId }: FetchAllAssetAction) {
        //console.log("FetchAllAsset called." + selectedAssetId);
        const state = ctx.getState();
        ctx.setState({
            ...state,
            inProgress: true
        });
        this.targetAccessService.getAssetList()
            .subscribe((result) => {
                ctx.setState({
                    ...state,
                    assetList: result?.filter(p => p != null),
                    inProgress: false,
                });

                //console.log("Fetch Completed.");
                //console.log("Fetch assetsLength= " + result.length)
                if (selectedAssetId)
                    ctx.dispatch(new SelectAssetAction(selectedAssetId))

            });
    }

    @Action(SelectAssetAction)
    FetchAssetById(ctx: StateContext<AssetStateModel>, { selectedAssetId }: SelectAssetAction) {
        //console.log("FetchAssetById called." + selectedAssetId);
        const assets = ctx.getState()?.assetList;
        //console.log("assetsLength= " + assets?.length)
        if (assets) {
            const asset = assets.find(a => a.id === selectedAssetId);
            //console.log("asset is= " + asset?.id)
            ctx.patchState({
                selectedAsset: asset
            });
        }
        else
            ctx.dispatch(new FetchAllAssetAction(selectedAssetId));
    }
}




