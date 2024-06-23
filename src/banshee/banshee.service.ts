/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBansheeDto } from './dto/create-banshee.dto';
import { UpdateBansheeDto } from './dto/update-banshee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BansheeService {
  constructor( private prisma: PrismaService) {}

  create(createBansheeDto: CreateBansheeDto) {
    return this.prisma.banshee.create({
      data: createBansheeDto,
    });
  }

  findAllAlive() {
    return this.prisma.banshee.findMany({
      where: { extinct: false},
    });
  }
  findAllExtinct() {
    return this.prisma.banshee.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.banshee.findUnique({
      where: {id}
    })
  }

  update(id: number, updateBansheeDto: UpdateBansheeDto) {
    return this.prisma.banshee.update({
      where: {id},
      data: updateBansheeDto,
    })
  }

  remove(id: number) {
    return this.prisma.banshee.delete({
      where: {id}
    });
  }
}
