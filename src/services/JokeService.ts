import axios from "axios";

export interface Joke {
  type: "single" | "twopart";
  setup?: string;
  delivery?: string;
  joke?: string;
}

export class JokeService {
  private readonly baseUrl = "https://v2.jokeapi.dev";

  async getProgrammingJoke(): Promise<Joke> {
    const url = `${this.baseUrl}/joke/Programming`;
    const response = await axios.get(url, {
      params: {
        type: "single,twopart",
      },
    });

    const data = response.data;

    if (data.type === "single") {
      return {
        type: "single",
        joke: data.joke,
      };
    }

    return {
      type: "twopart",
      setup: data.setup,
      delivery: data.delivery,
    };
  }
}

