import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";
import { QuoteService } from "../services/QuoteService";

export class QuoteCommand implements DevkitCommand {
  private readonly service = new QuoteService();

  register(program: CommanderProgram): void {
    program
      .command("quote")
      .description("Show a random inspirational quote (Quotable API)")
      .action(async () => {
        try {
          const quote = await this.service.getRandomQuote();
          console.log(`"${quote.content}"`);
          console.log(`— ${quote.author}`);
        } catch (err) {
          console.error("Failed to fetch quote.");
          if (err instanceof Error) {
            console.error(err.message);
          }
          process.exitCode = 1;
        }
      });
  }
}

