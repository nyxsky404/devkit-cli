export interface DevkitConfig {
  openWeatherApiKey?: string;
}

export function loadConfig(): DevkitConfig {
  return {
    openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  };
}

