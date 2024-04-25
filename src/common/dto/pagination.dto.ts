import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PagiantionDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(0)
  offset?: number;
}
