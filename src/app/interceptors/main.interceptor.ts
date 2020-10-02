import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const header = req.clone({
      headers: req.headers.set('Content-Type', 'application/json; charset=utf-8')
    });
        
    return next.handle(header).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Http Response

        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
            // Http Error Response

        }
      })
    );
  }
}