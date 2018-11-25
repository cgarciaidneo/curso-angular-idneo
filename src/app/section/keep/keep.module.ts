import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { SharedModule }       from "../../shared/shared.module";
import { keepRoutes }         from './keep.router';
import { KeepComponent }      from './keep/keep.component';
import { MenuItemComponent }  from './partial/navigation/side-nav/menu-item/menu-item.component';
import { SideNavComponent }   from './partial/navigation/side-nav/side-nav.component';
import { SearchBarComponent } from './partial/navigation/top-bar/search-bar/search-bar.component';
import { TopBarComponent }    from './partial/navigation/top-bar/top-bar.component';


@NgModule({
  declarations: [
    KeepComponent,
    TopBarComponent,
    SideNavComponent,
    SearchBarComponent,
    MenuItemComponent
  ],
  imports: [
    RouterModule.forChild(keepRoutes),
    SharedModule,
    CommonModule,
  ]
})
export class KeepModule {
}
