/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BansheeService } from './banshee.service';
import { BansheeController } from './banshee.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BansheeController],
  providers: [BansheeService],
  imports: [PrismaModule],
})
export class BansheeModule {}
