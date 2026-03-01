import { Command as CommanderProgram } from "commander";
import type { DevkitCommand } from "../core/Command";
import { GitHubService } from "../services/GitHubService";

export class GitHubCommand implements DevkitCommand {
  private readonly service = new GitHubService();

  register(program: CommanderProgram): void {
    program
      .command("github <username>")
      .description("Show GitHub user info (repos, followers, bio, profile URL)")
      .action(async (username: string) => {
        try {
          const user = await this.service.getUser(username);

          console.log(`GitHub User: ${user.login}`);
          if (user.name) console.log(`Name: ${user.name}`);
          if (user.bio) console.log(`Bio: ${user.bio}`);
          console.log(`Followers: ${user.followers}`);
          console.log(`Public repos: ${user.publicRepos}`);
          console.log(`Profile: ${user.htmlUrl}`);
        } catch (err) {
          console.error("Failed to fetch GitHub user.");
          if (err instanceof Error) {
            console.error(err.message);
          }
          process.exitCode = 1;
        }
      });
  }
}

