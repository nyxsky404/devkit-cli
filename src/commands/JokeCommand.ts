import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";
import { JokeService } from "../services/JokeService";

export class JokeCommand implements DevkitCommand {
  private readonly service = new JokeService();

  register(program: CommanderProgram): void {
    program
      .command("joke")
      .description("Show a random programming joke (JokeAPI)")
      .action(async () => {
        try {
          const joke = await this.service.getProgrammingJoke();

          if (joke.type === "single" && joke.joke) {
            console.log(joke.joke);
          } else if (joke.type === "twopart" && joke.setup && joke.delivery) {
            console.log(joke.setup);
            console.log(joke.delivery);
          } else {
            console.log("Got an unexpected joke format.");
          }
        } catch (err) {
          console.error("Failed to fetch joke.");
          if (err instanceof Error) {
            console.error(err.message);
          }
          process.exitCode = 1;
        }
      });
  }
}

