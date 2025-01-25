import { Module } from '@nestjs/common';
import { MoviesApiModule } from './movies-api/movies-api.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesApiModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
