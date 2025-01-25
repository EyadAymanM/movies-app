import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MoviesApiService {
  private readonly apiKey;
  private readonly baseUrl = 'https://www.omdbapi.com/';
  constructor(
    private config: ConfigService,
    private axios: HttpService,
  ) {
    this.apiKey = config.get('API_KEY');
  }

  async search(title: string, page?: string) {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&s=${title}&page=${page}`;
    const response = await lastValueFrom(this.axios.get(url));
    return response.data;
  }
}
