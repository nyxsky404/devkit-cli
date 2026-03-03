import axios from "axios";

export interface WeatherSummary {
  city: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

export class WeatherService {
  constructor(private readonly apiKey: string | undefined) {}

  private ensureApiKey(): string {
    if (!this.apiKey) {
      throw new Error(
        "OPENWEATHER_API_KEY is not set. Please export it in your environment."
      );
    }
    return this.apiKey;
  }

  async getCurrentWeather(city: string): Promise<WeatherSummary> {
    const key = this.ensureApiKey();
    const url = "https://api.openweathermap.org/data/2.5/weather";

    const response = await axios.get(url, {
      params: {
        q: city,
        appid: key,
        units: "metric",
      },
    });

    const data = response.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather?.[0]?.description ?? "Unknown",
    };
  }
}

