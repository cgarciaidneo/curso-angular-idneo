import { KeepComponent } from './keep/keep.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { keepRoutes } from './keep.router';
import { TopBarComponent } from './partial/navigation/top-bar/top-bar.component';
import { SideNavComponent } from './partial/navigation/side-nav/side-nav.component';
import { SearchBarComponent } from './partial/navigation/top-bar/search-bar/search-bar.component';


@NgModule({
  declarations: [
    KeepComponent,
    TopBarComponent,
    SideNavComponent,
    SearchBarComponent
  ],
  imports: [
    RouterModule.forChild(keepRoutes),
    CommonModule,
  ]
})
export class KeepModule { }
