import { PartialType } from '@nestjs/mapped-types';
import { $Enums } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  shopId: number;

  @IsNumber()
  @IsNotEmpty()
  catId: number;

  @IsString()
  @IsOptional()
  barcode?: string;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsEnum($Enums.ProductUnit)
  @IsOptional()
  unit?: $Enums.ProductUnit;

  @IsBoolean()
  @IsOptional()
  hasStock: boolean;

  @IsBoolean()
  @IsOptional()
  isSet?: boolean;

  @IsBoolean()
  @IsOptional()
  isCF?: boolean;

  @IsString()
  @IsOptional()
  pic?: string;

  @IsNumber()
  @IsOptional()
  createdBy?: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  @IsOptional()
  updatedBy?: number;
}
