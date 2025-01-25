import { Module } from '@nestjs/common';
import { MoviesApiModule } from './movies-api/movies-api.module';
import { PrismaModule } from './prisma/prisma.module';
import { FavouriteModule } from './favourite/favourite.module';

@Module({
  imports: [MoviesApiModule, PrismaModule, FavouriteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
