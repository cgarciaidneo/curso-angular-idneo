import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  /**
   * RUTAS LAS SECCIONES
   */
  {
    path: '',
    loadChildren: '../../../section/keep/keep.module#KeepModule'
  },
  /**
   * RUTAS GLOBALES
   */
]
