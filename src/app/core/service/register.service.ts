import { Injectable }          from '@angular/core';
import { MixedStorageService } from "./storage/mixed-storage.service";
import { IRegister }           from "../object/register";
import { USERS }               from "../object/constant/db";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private mixedStorage: MixedStorageService) {}

  register(newUser: IRegister){
    let users = this.mixedStorage.get<IRegister[]>(USERS);
    if(!users){
      users = [];
    }
    users.push(newUser);
    this.mixedStorage.set(USERS, users);
  }

}
