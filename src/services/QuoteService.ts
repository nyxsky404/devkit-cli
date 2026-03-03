import axios from "axios";

export interface Quote {
  content: string;
  author: string;
}

export class QuoteService {
  private readonly url = "https://zenquotes.io/api/random";

  async getRandomQuote(): Promise<Quote> {
    const response = await axios.get(this.url);
    const data = response.data;

    return {
      content: data[0].q,
      author: data[0].a,
    };
  }
}

