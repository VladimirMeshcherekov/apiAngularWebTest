import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherUIComponent} from './weather-ui/weather-ui.component';
import {WeatherApiService} from './services/weather-api.service';
import {HttpClientModule} from '@angular/common/http';
import { K2CTemperatureConverterPipe } from './pipes/K2CTemperatureConverter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WeatherUIComponent,
    K2CTemperatureConverterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
