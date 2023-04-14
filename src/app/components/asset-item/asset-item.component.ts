import { Component, Input, OnInit } from '@angular/core';
import { TargetAssetViewModel } from 'src/app/models/target-asset-view-model';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss']
})
export class AssetItemComponent implements OnInit {

  @Input() asset: TargetAssetViewModel=<TargetAssetViewModel>{};

  constructor() { }

  ngOnInit(): void {
  }

}
