import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
 
const routes: Routes =
 [{ path:'asset',component:AssetListComponent},
 { path:'asset-employee',component:CreateAssetComponent},
 {path:'',redirectTo:'asset',pathMatch:'full'},
 { path:'update-asset/:id',component:UpdateAssetComponent},
 { path:'asset-details/:id', component:ViewAssetComponent},
 { path:'file-upload', component:UploadFileComponent},
 { path:'file-upload/:id', component:UploadFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
