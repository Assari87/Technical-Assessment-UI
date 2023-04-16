import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { TargetAssetViewModel } from "../models/target-asset-view-model";
import { Injectable } from "@angular/core";
import { TargetAccessService } from "../services/target-access.service";
import { FetchAllAssetAction } from "./actions";

export class AssetStateModel {
    inProgress: boolean;
    assetList: TargetAssetViewModel[];
}

@State<AssetStateModel>({
    name: 'assets',
    defaults: {
        inProgress: false,
        assetList: []
    },
})
@Injectable()
export class AssetState implements NgxsOnInit{
    constructor(private targetAccessService: TargetAccessService) { }
    
    ngxsOnInit(ctx: StateContext<AssetStateModel>): void {
        ctx.dispatch(new FetchAllAssetAction());
    }

    @Action(FetchAllAssetAction)
    FetchAllAsset(ctx: StateContext<AssetStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            inProgress:true
        });
        this.targetAccessService.getAssetList()
            .subscribe((result) => {
                ctx.setState({
                    ...state,
                    assetList: result?.filter(p => p != null),
                    inProgress:false
                });
                console.log("Fetch Completed.");

            });


    }
}




