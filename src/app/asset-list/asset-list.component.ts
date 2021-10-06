import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AssetService } from '../asset.service';
import * as XLSX from 'xlsx';
import { ImageModel } from '../image-model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {


  searchedKeyword:string;
  size:number
  imagemodel:HttpResponse<ImageModel[]>
  fileName= 'ExcelSheet.xlsx';
  retrieveResonse: any;
  retrievedImage: string;
  base64Data: any;
  grid:boolean=false;
  retrieveType: any;
  retrievedPdf: string;
  constructor(private assetService:AssetService,private route:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getAsset();
  }
 
   getAsset(){
    this.assetService.viewImage().subscribe(
      data => {
        this.imagemodel = data
        console.log(data.statusText)
      }
    );
}

// getImage() {
//   //Make a call to Sprinf Boot to get the Image Bytes.
//   this.assetService.getImageById(this.imagemodel.body.)
//     .subscribe(
//       res => {
//         this.retrieveResonse = res;
//         this.retrieveType=this.retrieveResonse.type
//         this.base64Data = this.retrieveResonse.picByte;
//         // this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
//         this.retrievedImage = 'http://127.0.0.1:8887/'+this.retrieveResonse.name
//         this.retrievedPdf = 'http://127.0.0.1:8887/'+this.retrieveResonse.name
//         console.log(this.retrieveResonse.size)
//         console.log(this.retrieveResonse)
//         console.log(this.retrieveResonse.name)
//       }
//     );
// }

  update(id:number){
    this.route.navigate(['update-asset',id]);
  }

  delete(id:number){
    this.assetService.deleteImage(id).subscribe(data =>{
      console.log(data)
      this.getAsset()
    })
  }

  view(id:number){
    this.route.navigate(['asset-details',id])
  }
  
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  generatePdf(){
    const doc = new jsPDF()
    autoTable(doc, { html: '#excel-table' })
    doc.save('table.pdf')
     

  }
  gridview(){
    this.grid=true;
    

  }
  listview(){
    this.grid=false
  }
}
  
