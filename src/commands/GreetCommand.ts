import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";

function getGreetingForCurrentTime(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export class GreetCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("greet <name>")
      .description("Personalized greeting with time of day")
      .action((name: string) => {
        const greeting = getGreetingForCurrentTime();
        console.log(`${greeting}, ${name}!`);
      });
  }
}

