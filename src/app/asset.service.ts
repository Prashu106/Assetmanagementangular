import { HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageModel } from './image-model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpclient:HttpClient) { }
  
  private baseUrl:string="http://localhost:8085/";
 
 
  public viewImage():Observable<HttpResponse<ImageModel[]>>{
    return this.httpclient.get<any>(this.baseUrl+"get")
  }
  public getImageById(id:number):Observable<HttpResponse<ImageModel>>{
    return this.httpclient.get<any>(this.baseUrl+"get/"+id)
  }
 
  public addImage(uploadImageData:any):Observable<HttpResponse<ImageModel>>{
    return this.httpclient.post<ImageModel>(this.baseUrl+"upload",uploadImageData, { observe: 'response' })
  }
  
  public updateImage(uploadImageData:any,id:number):Observable<HttpResponse<ImageModel>>{
    return this.httpclient.put<ImageModel>(this.baseUrl+"upload/"+id,uploadImageData, { observe: 'response' })
  }
  public deleteImage(empid:number):Observable<any>{
    return this.httpclient.delete(this.baseUrl+"delete/"+empid)
  }

}