import { Command as CommanderProgram } from "commander";
import crypto from "crypto";
import type { DevkitCommand } from "../core/Command";

type HashAlgo = "md5" | "sha256";

function computeHash(input: string, algo: HashAlgo): string {
  return crypto.createHash(algo).update(input, "utf8").digest("hex");
}

export class HashCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("hash <text>")
      .description("Compute MD5 or SHA256 hash of input")
      .option(
        "-a, --algo <algorithm>",
        "Hash algorithm (md5 or sha256)",
        "sha256"
      )
      .action((text: string, options: { algo: string }) => {
        const algo = (options.algo || "sha256").toLowerCase() as HashAlgo;
        if (algo !== "md5" && algo !== "sha256") {
          console.error('Invalid algorithm. Use "md5" or "sha256".');
          process.exitCode = 1;
          return;
        }

        const hash = computeHash(text, algo);
        console.log(`${algo.toUpperCase()}: ${hash}`);
      });
  }
}

