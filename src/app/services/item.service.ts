import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpHelperService } from './http-helper.service';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    constructor(private http: HttpHelperService) { }

    getAll() {
        return this.http.find<Photo[]>('photos').pipe(map(res => {
            return res.body;
        }));
    }

}