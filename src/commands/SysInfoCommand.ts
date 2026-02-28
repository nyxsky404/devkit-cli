import { Command as CommanderProgram } from "commander";
import os from "os";
import type { DevkitCommand } from "../core/Command";

export class SysInfoCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("sysinfo")
      .description("Display OS, CPU, RAM, uptime, and Node.js version")
      .action(() => {
        const cpus = os.cpus();
        const cpuModel = cpus[0]?.model ?? "Unknown";

        console.log("System Information");
        console.log("------------------");
        console.log(`OS: ${os.type()} ${os.release()} (${os.platform()})`);
        console.log(`CPU: ${cpuModel} (${cpus.length} cores)`);
        console.log(
          `RAM: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(
            2
          )} GB total, ` +
            `${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB free`
        );
        try {
          const uptimeSeconds = os.uptime();
          console.log(
            `Uptime: ${Math.floor(uptimeSeconds / 3600)}h ${Math.floor(
              (uptimeSeconds % 3600) / 60
            )}m`
          );
        } catch {
          console.log("Uptime: not available in this environment");
        }
        console.log(`Node: ${process.version}`);
      });
  }
}

