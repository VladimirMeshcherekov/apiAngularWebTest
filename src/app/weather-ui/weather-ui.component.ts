import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from '../services/weather-api.service';
import {IWeather} from '../interfaces/iweather.interface';

@Component({
  selector: 'app-weather-ui',
  templateUrl: './weather-ui.component.html',
  styleUrl: './weather-ui.component.css'
})

export class WeatherUIComponent implements OnInit {
  public city!: string;
  public weatherData!: IWeather;

  constructor(private weatherApiService: WeatherApiService) {
    this.city = "Hrodna"
  }

  ngOnInit() {
    this.showWeather()
  }

  showWeather() {
    this.weatherApiService.getWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      }
    )
  }
}
