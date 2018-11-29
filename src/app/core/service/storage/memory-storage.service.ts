import { Injectable }       from '@angular/core';
import { IdnStorageModule } from './idn-storage.module';
import { IStorage }         from './storage.interface';

@Injectable({
  providedIn: IdnStorageModule,
})
export class MemoryStorageService implements IStorage {

  private _storage: object = {};

  get<T>(key: string): T {
    return this._storage[key];
  }

  set<T>(key: string, value: T) {
    this._storage[key] = value;
  }

  has(key: string): boolean {
    return key in this._storage;
  }

  delete(key: string) {
    this._storage[key] = undefined;
    return false;
  }

  clean() {
    this._storage = {};
  }

}
