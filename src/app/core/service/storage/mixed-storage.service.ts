import { Injectable }           from '@angular/core';
import { IdnStorageModule }     from './idn-storage.module';
import { LocalStorageService }  from './local-storage.service';
import { MemoryStorageService } from './memory-storage.service';
import { IStorage }             from './storage.interface';

@Injectable({
  providedIn: IdnStorageModule,
})
export class MixedStorageService implements IStorage {

  constructor(private local: LocalStorageService,
              private memory: MemoryStorageService) {
  }

  get<T>(key: string): T {
    let data = this.memory.get(key);
    if (data) return <T>data;
    data = this.local.get(key);
    if (data) {
      this.memory.set(key, data);
    }
    return <T>data
  }

  set<T>(key: string, value: T) {
    this.memory.set(key, value);
    this.local.set(key, value);
  }

  has(key: string): boolean {
    return this.memory.has(key) || this.local.has(key);
  }

  delete(key: string) {
    this.memory.delete(key);
    this.local.delete(key);
  }

  clean() {
    this.memory.clean();
    this.local.clean();
  }
}
