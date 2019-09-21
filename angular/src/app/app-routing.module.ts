import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostOneComponent } from './components/post-one/post-one.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { AllPostComponent } from './components/dashboard/all-post/all-post.component';
import { AddPostComponent } from './components/dashboard/add-post/add-post.component';
import { EditPostComponent } from './components/dashboard/edit-post/edit-post.component';
//Not Found Page
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'post-one/:id',component:PostOneComponent },
  { 
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:AllPostComponent
      },
      {
        path:'all-post',
        component:AllPostComponent
      },
      {
        path:'add-post',
        component:AddPostComponent
      },
      {
        path:'edit-post',
        component:EditPostComponent
      }
    ]
   },
  { path:'**',component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
