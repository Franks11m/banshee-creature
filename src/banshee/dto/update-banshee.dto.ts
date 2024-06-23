/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateBansheeDto } from './create-banshee.dto';

export class UpdateBansheeDto extends PartialType(CreateBansheeDto) {}
