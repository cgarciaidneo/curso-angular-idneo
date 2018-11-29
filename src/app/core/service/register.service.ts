import { Injectable }          from '@angular/core';
import { MixedStorageService } from "./storage/mixed-storage.service";
import { IRegister }           from "../object/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly USERS = 'USERS';

  constructor(private mixedStorage: MixedStorageService) {}

  register(newUser: IRegister){
    let users = this.mixedStorage.get<IRegister[]>(this.USERS);
    if(!users){
      users = [];
    }
    users.push(newUser);
    this.mixedStorage.set(this.USERS, users);
  }

}
