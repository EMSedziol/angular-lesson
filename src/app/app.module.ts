import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LetterComponent } from './letter/letter.component';
import { PlaygroundComponent } from './playground/playground.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorService } from './vendor/vendor.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './product/product.service';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    LetterComponent,
    PlaygroundComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    VendorComponent,
    VendorListComponent,
    ProductComponent,
    ProductListComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, 
    ProductService,
    VendorService],
  bootstrap: [AppComponent]  // this is what Angular runs at startup
})
export class AppModule { }
