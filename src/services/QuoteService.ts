import axios from "axios";

export interface Quote {
  content: string;
  author: string;
}

export class QuoteService {
  private readonly url = "https://api.quotable.io/random";

  async getRandomQuote(): Promise<Quote> {
    const response = await axios.get(this.url);
    const data = response.data;

    return {
      content: data.content,
      author: data.author,
    };
  }
}

