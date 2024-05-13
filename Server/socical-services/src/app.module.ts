import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NeogqlModule } from './neogql/neogql.module';

@Module({
  imports: [NeogqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
