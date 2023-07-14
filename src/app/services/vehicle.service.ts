import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient
  ) { }

  get(accessToken: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + accessToken
    });
    return this.http.get(`${environment.API_URL}/vehicle/v1/private`, { headers });
  }
}
