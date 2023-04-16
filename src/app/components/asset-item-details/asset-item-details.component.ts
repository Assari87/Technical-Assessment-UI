import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-asset-item-details',
  templateUrl: './asset-item-details.component.html',
  styleUrls: ['./asset-item-details.component.scss']
})
export class AssetItemDetailsComponent implements OnInit {

  assetId?: number;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getIdParameter();
  }

  getIdParameter() {
    this.route.params.subscribe((params: Params) => {
      this.assetId = params['id'] ? params['id'] : null;

      //if(this.assetId)
    });
  }

}
