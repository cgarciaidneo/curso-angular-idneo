import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { AppComponent }  from './app.component';
import { CoreModule }    from './core/core.module';
import { SectionModule } from './section/section.module';
import { SharedModule }  from './shared/shared.module';

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
export class AppModule {
}
