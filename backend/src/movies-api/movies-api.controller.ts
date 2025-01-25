import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { MoviesApiService } from './movies-api.service';

@Controller('movies-api')
export class MoviesApiController {
  constructor(private moviesApiService: MoviesApiService) {}

  @Get('search')
  search(@Query('title') title: string, @Query('page') page: string) {
    if (!title) {
      throw new NotFoundException('please provide a title');
    }
    return this.moviesApiService.search(title, page);
  }
}
