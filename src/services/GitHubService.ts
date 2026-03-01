import axios from "axios";

export interface GitHubUserSummary {
  login: string;
  name: string | null;
  bio: string | null;
  followers: number;
  publicRepos: number;
  htmlUrl: string;
}

export class GitHubService {
  private readonly baseUrl = "https://api.github.com";

  async getUser(username: string): Promise<GitHubUserSummary> {
    const url = `${this.baseUrl}/users/${encodeURIComponent(username)}`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "devkit-cli",
        Accept: "application/vnd.github+json",
      },
    });

    const data = response.data;

    return {
      login: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      publicRepos: data.public_repos,
      htmlUrl: data.html_url,
    };
  }
}

