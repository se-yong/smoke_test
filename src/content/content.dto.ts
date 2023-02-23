import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ContentCreateDto {
  @IsString()
  content_uuid: string;

  @IsOptional()
  @IsString()
  phone_number: string;

  @IsBoolean()
  privacy_terms = true;

  @IsOptional()
  @IsString()
  input_content: string;
}