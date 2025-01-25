import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesApiModule } from './movies-api/movies-api.module';

@Module({
  imports: [MoviesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
