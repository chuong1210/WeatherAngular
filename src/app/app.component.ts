import { FormsModule } from '@angular/forms';
import { WeatherData } from './models/weather.mod';
import { Component, OnChanges, OnInit, SimpleChanges, Pipe, NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';

  constructor(private WeatherService:WeatherService)
  {

  }


  cityName:string='USA';
  WeatherData?:WeatherData
  // WeatherDatas?:WeatherData[]



  onSubmit()
  {
    this.getWeatherData(this.cityName);
    this.cityName='';

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);

  }


  private getWeatherData(cityName:string)
  {
    this.WeatherService.getWeatherData(cityName).subscribe({
      next:(response)=>
      {
       this.WeatherData=response;
       console.log(response);
      }
    })
  }

}
