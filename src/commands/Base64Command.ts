import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";

export class Base64Command implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("base64 <mode> <text>")
      .description("Base64 encoding/decoding (mode: encode|decode)")
      .action((mode: string, text: string) => {
        try {
          if (mode === "encode") {
            const encoded = Buffer.from(text, "utf8").toString("base64");
            console.log(encoded);
          } else if (mode === "decode") {
            const decoded = Buffer.from(text, "base64").toString("utf8");
            console.log(decoded);
          } else {
            console.error('Invalid mode. Use "encode" or "decode".');
            process.exitCode = 1;
          }
        } catch (err) {
          console.error("Failed to process base64 text.");
          if (err instanceof Error) {
            console.error(err.message);
          }
          process.exitCode = 1;
        }
      });
  }
}

