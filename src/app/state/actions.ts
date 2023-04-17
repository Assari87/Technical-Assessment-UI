export class FetchAllAssetAction {
    static readonly type = '[Asset] Fetch All';
    constructor(public selectedAssetId: number = null) {}
}
export class SelectAssetAction {
    static readonly type = '[Asset] Select Asset';
    constructor(public selectedAssetId: number) {}
}
