export class SelectAssetAction {
    static readonly type = '[Asset] Select Asset';
    constructor(public selectedAssetId: number) {}
}
