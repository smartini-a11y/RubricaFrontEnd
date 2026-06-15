import {HttpInterceptorFn} from '@angular/common/http';

// Interceptor per aggiungere le credenziali (cookie) a tutte le richieste HTTP
export const authInterceptor: HttpInterceptorFn =
(req, next) => {
  const clonedReq = req.clone({
    withCredentials: true
  });

  return next(clonedReq);
};