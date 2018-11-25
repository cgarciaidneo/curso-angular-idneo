import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './drawer-container/drawer-container.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';

@NgModule({
  declarations: [
    DrawerContainerComponent,
    DrawerComponent,
    DrawerContentComponent
  ],
  exports: [
    DrawerContainerComponent,
    DrawerComponent,
    DrawerContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrawerLayoutModule { }
