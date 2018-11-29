import { Injectable }           from '@angular/core';
import { Observable, Observer } from "rxjs";
import { MixedStorageService }  from "./mixed-storage.service";
import { IRegister }            from "../../object/register";
import { IS_AUTH, USERS }       from "../../object/constant/db";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private mixedStorage: MixedStorageService) {
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>((obserser: Observer<any>) => {

      let users = this.mixedStorage.get<IRegister[]>(USERS);
      if (!users) {
        this.mixedStorage.set(IS_AUTH, false)
        obserser.error(false);
        obserser.complete();
        return;
      } else {
        for (let user of users) {
          if (user.email === email && user.password === password) {
            this.mixedStorage.set(IS_AUTH, true);
            obserser.next(true);
            obserser.complete();
            return;
          }
        }

        obserser.error(false);
        obserser.complete();
        return;
      }
    })
  }

  isAuth(): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      const isAuth = this.mixedStorage.get<boolean>(IS_AUTH);
      if(!isAuth){
        observer.error(false);
        observer.complete();
      }else{
        observer.next(true);
        observer.complete();
      }
    })
  }

  logout(): Observable<boolean> {
    return null;
  }
}
