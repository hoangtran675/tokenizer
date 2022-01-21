import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_SERVER = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private httpClient : HttpClient) { }

  getWordList(text : any) : Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(`${API_SERVER}/api/v1/word`, {documents : text}, {responseType : 'json'});
  }
  getPosTag(text : any) {
    return this.httpClient.post<any>(`${API_SERVER}/api/v1/postag`, {documents : text}, {responseType : 'json'})
  }
}
