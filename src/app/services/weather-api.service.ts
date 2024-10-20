import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiKey = '79279c3dc86c7c56cfef46d0b363116d';

  constructor(public http: HttpClient) {
  }

  public getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
  }
}
