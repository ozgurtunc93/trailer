import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

import { ApiService } from './provider/api.services';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import 'hammerjs/hammer';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon"; // <----- Here
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material'; 
const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatIconModule,
  MatChipsModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule 
]; 
//Material

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    ContentComponent,
    LoginComponent,
    CatalogComponent,
    CatalogDetailComponent,
    RegisterComponent
    ],
  imports: [
    SwiperModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ...modules
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
