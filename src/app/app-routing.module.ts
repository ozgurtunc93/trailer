import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';
import { RegisterComponent } from './register/register.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';



const routes: Routes = [
  { path: 'store/:p1', component: StoreComponent },
  { path: 'catalog/:p1', component: CatalogDetailComponent },
  { path: 'category-detail/:p1', component: CategoryDetailComponent },
  { path: ':p1/content/:p2', component: ContentComponent},
  { path: 'login', component: LoginComponent },
  { path : 'register' , component : RegisterComponent},
  { path: '**', redirectTo: 'store/Watch', pathMatch: 'full' }

];

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
