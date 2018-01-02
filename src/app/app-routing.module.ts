import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LetterComponent } from './letter/letter.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';
import { UserListComponent} from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'vendorlist', component: VendorListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productlist', component: ProductListComponent},
  { path: 'upload', component: UploadComponent},
  { path: '**', component: HomeComponent }

]; // http://localhost:4200/user/detail/1

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
