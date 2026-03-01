import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";

export class TimestampCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("timestamp")
      .description("Show current time in multiple formats")
      .action(() => {
        const now = new Date();
        const iso = now.toISOString();
        const unixSeconds = Math.floor(now.getTime() / 1000);
        const local = now.toLocaleString();

        console.log("Current Time");
        console.log("------------");
        console.log(`ISO:   ${iso}`);
        console.log(`Unix:  ${unixSeconds}`);
        console.log(`Local: ${local}`);
      });
  }
}

