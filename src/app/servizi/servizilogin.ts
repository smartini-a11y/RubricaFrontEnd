import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servizilogin {
    private apiUrl = 'http://192.168.124.18:5000/api/auth';

    constructor(private http: HttpClient) {}

    // POST - Login
    login(username: string, password: string): Observable<any> {
        return this.http.post(this.apiUrl + '/login', { username, password }, {
            withCredentials: true
        });
    }

    // Post - Refresh token
    refreshToken(): Observable<any> {
        return this.http.post(this.apiUrl + '/refresh', {}, {
            withCredentials: true
        });
    }

    // POST - Logout
    logout(): Observable<any> {
        return this.http.post(this.apiUrl + '/logout', {}, {
            withCredentials: true
        });
    }

}
