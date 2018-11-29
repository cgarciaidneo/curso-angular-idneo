import { Injectable }       from '@angular/core';
import { IdnStorageModule } from './idn-storage.module';
import { IStorage }         from './storage.interface';

@Injectable({
  providedIn: IdnStorageModule,
})
export class LocalStorageService implements IStorage {

  get<T>(key: string): T {
    let value = localStorage.getItem(key);
    return (typeof value !== 'undefined') ? JSON.parse(value) : undefined;
  }

  set<T>(key: string, value: T) {
    let saveValue = JSON.stringify(value);
    localStorage.setItem(key, saveValue);
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  delete(key: string) {
    if (!this.get(key)) return false;
    localStorage.removeItem(key)
  }

  clean() {
    localStorage.clear();
  }
}
