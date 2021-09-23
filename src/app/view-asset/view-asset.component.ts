import { HttpClient } from '@angular/common/http';
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
  constructor(private route:Router,private activeRoute:ActivatedRoute,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
    this.getImage()
  }
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8085/get/' + this.id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.retrieveType=this.retrieveResonse.type
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.retrievedPdf = 'data:;base64,' + this.base64Data;
          console.log(this.retrieveResonse.size)
        }
      );
  }
  listview(){
    this.route.navigate(['asset']);
  }
  
}
