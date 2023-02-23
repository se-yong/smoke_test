import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentCreateDto } from './content.dto';
import { Content } from './content.entity';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  async createContent(
    @Body() contentCreateDto: ContentCreateDto,
  ): Promise<any> {
    await this.contentService.createContent(contentCreateDto);
    return { message: 'success' };
  }

  @Get()
  async findAllContent():Promise<Content[]> {
    return await this.contentService.findAllContent();
  }
} 
