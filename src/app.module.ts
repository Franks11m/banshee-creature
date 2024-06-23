/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BansheeModule } from './banshee/banshee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BansheeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
