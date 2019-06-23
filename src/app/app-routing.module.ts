import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  { path: 'store/:p1', component: StoreComponent },
  { path: '**', redirectTo: 'store/Watch', pathMatch: 'full' }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
