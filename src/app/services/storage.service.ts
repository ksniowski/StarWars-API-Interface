import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class StorageService {
    constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {}

    saveInSession(key: string, val: any): void {
        this.storage.set(key, val);
    }

    getFromSession(key: string): string {
        return this.storage.get(key);
    }
}