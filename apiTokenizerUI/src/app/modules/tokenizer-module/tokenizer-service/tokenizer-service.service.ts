import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenVN } from '../models/tokenizer';

const API_SERVER = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TokenizerServiceService {

  constructor(private httpClient : HttpClient) { 

  }
  getWordList(text : string[]) : Observable<HttpResponse<TokenVN>> {
    return this.httpClient.post<any>(`${API_SERVER}/api/v1/word`, {documents : text}, {responseType : 'json'})
  }
  getPosTag(text : string[]) : Observable<HttpResponse<TokenVN>>{
    return this.httpClient.post<any>(`${API_SERVER}/api/v1/postag`, {documents : text}, {responseType : 'json'})
  }
}
