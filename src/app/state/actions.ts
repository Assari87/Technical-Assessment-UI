export class FetchAllAssetAction {
    static readonly type = '[Asset] Fetch All';
}

export class FetchAssetByIdAction {
    static readonly type = '[Asset] Fetch Asset';
    constructor(public id: number) {}
}
