export interface IStorage {
  get<T>(key: string): T;

  set<T>(key: string, value: T);

  has(key: string): boolean;

  delete(key: string);

  clean();
}
