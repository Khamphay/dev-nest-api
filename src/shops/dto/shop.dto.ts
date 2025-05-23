import { PartialType } from '@nestjs/mapped-types';
import { $Enums } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateShopDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  uid: number;

  @IsNumber()
  @IsNotEmpty()
  currId: number;

  @IsString()
  @IsOptional()
  tel: string | null;

  @IsNumber()
  @IsNotEmpty()
  provinceId: number;

  @IsNumber()
  @IsNotEmpty()
  districtId: number;

  @IsNumber()
  @IsNotEmpty()
  villageId: number;

  @IsEnum($Enums.VatType)
  @IsOptional()
  vatType?: $Enums.VatType;

  @IsNumber()
  @IsOptional()
  vat?: number;

  @IsEnum($Enums.ShopType)
  @IsNotEmpty()
  shopType: $Enums.ShopType;

  @IsEnum($Enums.ShopsStatus)
  @IsNotEmpty()
  status: $Enums.ShopsStatus;

  @IsString()
  @IsOptional()
  pic?: string;

  @IsNumber()
  @IsOptional()
  createdBy?: number;
}

export class UpdateShopDto extends PartialType(CreateShopDto) {
  @IsNumber()
  @IsOptional()
  updatedBy?: number;
}
