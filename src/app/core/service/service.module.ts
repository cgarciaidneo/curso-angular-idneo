import { AppRouterModule }  from './app-router/app-router.module';
import { NgModule }         from '@angular/core';
import { IdnStorageModule } from "./storage/idn-storage.module";

@NgModule({
  declarations: [],
  imports: [
    AppRouterModule,
    IdnStorageModule
  ]
})
export class ServiceModule {
}
