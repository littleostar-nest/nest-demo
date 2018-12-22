import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly connection: Connection,
  ) {
  }
}
