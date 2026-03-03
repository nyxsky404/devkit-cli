import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";
import { WeatherService } from "../services/WeatherService";
import { loadConfig } from "../config";

export class WeatherCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("weather <city>")
      .description("Show current weather for a city (OpenWeatherMap)")
      .action(async (city: string) => {
        const config = loadConfig();
        const service = new WeatherService(config.openWeatherApiKey);

        try {
          const weather = await service.getCurrentWeather(city);

          console.log(`Weather in ${weather.city}`);
          console.log("--------------------");
          console.log(`Description: ${weather.description}`);
          console.log(`Temperature: ${weather.temperature} °C`);
          console.log(`Feels like: ${weather.feelsLike} °C`);
          console.log(`Humidity: ${weather.humidity}%`);
          console.log(`Wind speed: ${weather.windSpeed} m/s`);
        } catch (err) {
          if (err instanceof Error) {
            console.error(err.message);
          } else {
            console.error("Failed to fetch weather.");
          }
          process.exitCode = 1;
        }
      });
  }
}

