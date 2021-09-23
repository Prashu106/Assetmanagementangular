import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AssetListComponent } from './asset-list/asset-list.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { PdfViewerModule } from 'ng2-pdf-viewer'

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    CreateAssetComponent,
    UpdateAssetComponent,
    ViewAssetComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
