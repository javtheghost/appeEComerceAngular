import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getProvidersI } from 'src/app/models/Provider.interface';
import { Token } from '@angular/compiler';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { ProviderI } from '../../models/ProviderI.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://127.0.0.1:3333/"
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login"; //apunta al endpoint login
    return this.http.post<ResponseI>(direccion, form);
  }


  getProviders():Observable<getProvidersI[]>{
    let direccion = this.url + "providers"
    return this.http.get<getProvidersI[]>(direccion)
  }


  postProvider(provider:ProviderI):Observable<ProviderI>{
    let direccion = this.url + "providers"
    return this.http.post<ProviderI>(direccion, provider);
  }

  updateProvider(id:number, provider:ProviderI):Observable<ProviderI>{
    let direccion = this.url + "providers"

    return this.http.put<ProviderI>(direccion + `/${id}`, provider);
  }

  deleteProvider(id:number){
    let direccion = this.url + "providers"

    return this.http.delete(direccion + `/${id}`);
  }
}
