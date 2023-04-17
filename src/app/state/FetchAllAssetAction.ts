export class FetchAllAssetAction {
    static readonly type = '[Asset] Fetch All';
    constructor(public selectedAssetId: number = null) { }
}
