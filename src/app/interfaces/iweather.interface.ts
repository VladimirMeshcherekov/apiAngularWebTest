export interface IWeather {
  city: string;
  clouds: number;
  name: string;
  main: {
    temp: number;
    humidity: number;
  }

  weather: [
    {
      description: string;  // Детализированное описание (например, "light intensity drizzle")
      icon: string;  // Иконка (например, "09d")
    }
  ];
  wind: {
    speed: number;
  }


}
