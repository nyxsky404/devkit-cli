import { Command as CommanderProgram } from "commander";

export interface DevkitCommand {
  register(program: CommanderProgram): void;
}

