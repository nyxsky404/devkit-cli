import { Command as CommanderProgram } from "commander";
import fs from "fs";
import path from "path";
import type { DevkitCommand } from "../core/Command";

function getLineCount(filePath: string): number | undefined {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    if (!content) return 0;
    return content.split(/\r?\n/).length;
  } catch {
    return undefined;
  }
}

export class FileInfoCommand implements DevkitCommand {
  register(program: CommanderProgram): void {
    program
      .command("fileinfo <filepath>")
      .description("Show size, type, modified date, and line count for a file")
      .action((filepath: string) => {
        const fullPath = path.resolve(process.cwd(), filepath);

        if (!fs.existsSync(fullPath)) {
          console.error(`File not found: ${fullPath}`);
          process.exitCode = 1;
          return;
        }

        const stats = fs.statSync(fullPath);
        if (!stats.isFile()) {
          console.error(`Not a regular file: ${fullPath}`);
          process.exitCode = 1;
          return;
        }

        const ext = path.extname(fullPath) || "(no extension)";
        const modified = stats.mtime.toISOString();
        const sizeBytes = stats.size;
        const lineCount = getLineCount(fullPath);

        console.log(`Path: ${fullPath}`);
        console.log(`Type: ${ext}`);
        console.log(`Size: ${sizeBytes} bytes`);
        console.log(`Modified: ${modified}`);
        if (lineCount !== undefined) {
          console.log(`Lines: ${lineCount}`);
        } else {
          console.log("Lines: (binary or unreadable as text)");
        }
      });
  }
}

