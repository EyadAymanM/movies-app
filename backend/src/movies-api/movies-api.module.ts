import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MoviesApiService } from './movies-api.service';
import { MoviesApiController } from './movies-api.controller';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule,
  ],
  providers: [MoviesApiService],
  controllers: [MoviesApiController],
})
export class MoviesApiModule {}
