#!/usr/bin/env node
import { Command } from "commander";
import { CommandRegistry } from "./core/CommandRegistry";
import { GreetCommand } from "./commands/GreetCommand";
import { FileInfoCommand } from "./commands/FileInfoCommand";
import { GitHubCommand } from "./commands/GitHubCommand";
import { WeatherCommand } from "./commands/WeatherCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { JokeCommand } from "./commands/JokeCommand";
import { SysInfoCommand } from "./commands/SysInfoCommand";
import { Base64Command } from "./commands/Base64Command";
import { HashCommand } from "./commands/HashCommand";
import { TimestampCommand } from "./commands/TimestampCommand";

async function main() {
  const program = new Command();

  program
    .name("devkit")
    .description("Developer utility toolkit CLI")
    .version("1.0.0");

  const registry = new CommandRegistry([
    new GreetCommand(),
    new FileInfoCommand(),
    new GitHubCommand(),
    new WeatherCommand(),
    new QuoteCommand(),
    new JokeCommand(),
    new SysInfoCommand(),
    new Base64Command(),
    new HashCommand(),
    new TimestampCommand(),
  ]);

  registry.registerAll(program);

  await program.parseAsync(process.argv);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

