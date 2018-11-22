import { RouterModule } from '@angular/router';
import { SectionModule } from './section/section.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeepModule } from './section/keep/keep.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
