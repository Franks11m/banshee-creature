/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BansheeService } from './banshee.service';
import { CreateBansheeDto } from './dto/create-banshee.dto';
import { UpdateBansheeDto } from './dto/update-banshee.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('Banshee')
@ApiTags('Banshee')
export class BansheeController {
  constructor(private readonly bansheeService: BansheeService) {}

  @Post()
  create(@Body() createBansheeDto: CreateBansheeDto) {
    return this.bansheeService.create(createBansheeDto);
  }

  @Get()
  findAll() {
    return this.bansheeService.findAllAlive();
  }

  @Get ('extinct')//localhost:3000/creature/extinct
  findAllExtinct() {
    return this.bansheeService.findAllExtinct();
  }

  @Get(':id')//localhost:3000/creature/extinct
  findOne(@Param('id') id: string) {
    return this.bansheeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBansheeDto: UpdateBansheeDto) {
    return this.bansheeService.update(+id, updateBansheeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bansheeService.remove(+id);
  }
}
