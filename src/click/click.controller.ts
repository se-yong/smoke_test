import { Controller, Post } from '@nestjs/common';
import { ClickEventService } from './click.service';

@Controller('click')
export class ClickEventController {
  constructor(private clickEventService: ClickEventService) {}

  @Post()
  async createClickEvent(
  ): Promise<any> {
    await this.clickEventService.createClickEvent();
    return { message: 'success' };
  }
} 
