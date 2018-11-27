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
  {
    path: 'login',
    loadChildren: '../../../section/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: '../../../section/register/register.module#RegisterModule'
  },
  {
    path: '**',
    loadChildren: '../../../section/error/error.module#ErrorModule'
  }
];
