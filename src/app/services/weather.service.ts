import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.mod';
import { environment } from '../models/environment';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

constructor(private http:HttpClient)
 { }

 getWeatherData(cityName:string):Observable<WeatherData>{
  return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'city/'+cityName, {
    headers: new HttpHeaders()
    .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),


  });
 }

 getALlnameCountries():Observable<WeatherData[]>{
  return this.http.get<WeatherData[]>(environment.weatherApiBaseUrl+'city/', {
    headers: new HttpHeaders()
    .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),


  });
 }
}
