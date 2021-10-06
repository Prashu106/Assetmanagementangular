
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';


@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {


  id:number
  retrieveResonse: any;
  retrieveType: any;
  retrievedImage: string;
  retrievedPdf: string;
  base64Data: any;
  retrievedDoc: string;
  retrievedItem: string;
  constructor(private route:Router,private activeRoute:ActivatedRoute,private assetService:AssetService,
    ) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
    this.getImage()
  }
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.assetService.getImageById(this.id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.retrieveType=this.retrieveResonse.type
          if(this.retrieveType != 'application/pdf' ) {
            this.retrievedImage = "assets/"+this.retrieveResonse.name
          }else{
            this.retrievedPdf =   "assets/"+this.retrieveResonse.name
          }
          // this.retrievedItem = "assets/"+this.retrieveResonse.name
          // this.base64Data = this.retrieveResonse.picByte;
          // this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.retrievedPdf =   "assets/"+this.retrieveResonse.name
          this.retrievedDoc = 'assets/'+this.retrieveResonse.name

          console.log(this.retrieveResonse.location)
          console.log(this.retrieveResonse)
          console.log(this.retrieveResonse.name)
        }
      );
  }
  listview(){
    this.route.navigate(['asset']);
  }
  
}
