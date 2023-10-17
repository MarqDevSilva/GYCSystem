import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorNavBarComponent } from './shrared/components/creator-nav-bar/creator-nav-bar.component';


const routes: Routes = [
  {
    path: '',
    component: CreatorNavBarComponent,
    title: 'Home',
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreatorEventRoutingModule { }
