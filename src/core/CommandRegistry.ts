import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "./Command";

export class CommandRegistry {
  private readonly commands: DevkitCommand[];

  constructor(commands: DevkitCommand[]) {
    this.commands = commands;
  }

  registerAll(program: CommanderProgram): void {
    for (const command of this.commands) {
      command.register(program);
    }
  }
}

