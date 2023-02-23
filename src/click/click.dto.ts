import { IsString } from 'class-validator';

export class ClickEventDto {
  @IsString()
  click_uuid: string;
}