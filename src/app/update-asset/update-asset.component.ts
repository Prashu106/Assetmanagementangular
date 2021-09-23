import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AssetService } from '../asset.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  id:number
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageId: any;
  alertMessage:Boolean = false;

  
  constructor(private assetService:AssetService,private route:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    
  }
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.assetService.updateImage(uploadImageData,this.id)
      .subscribe((data) => {
        if (data.status === 202) {
          console.log("Status is " + data.status);
          this.alertMessage = true;
          this.imageId = data.body.id;
          console.log("id is " +data.body.id)
        } else {
          this.message = 'File not Updated successfully';
          console.log(data.status);
        }
      }
      );
    }
    list(){
      this.route.navigate(['asset']);
    }

}
