import { Injectable, HttpStatus, HttpException, Inject } from '@nestjs/common';
import { ContentRepository } from './content.repository';
import { ContentCreateDto } from './content.dto';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { Content } from './content.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { generateRandomId, getRandomString, getToday } from 'src/utils';

@Injectable()
export class ContentService {
  constructor(
    @Inject('CONTENT_REPOSITORY')
    private contentRepository: Repository<Content>,
    // private contentRepository: ContentRepository,
  ) {}

  public async createContent(contentCreateDto: ContentCreateDto) 
  : Promise<void> {
    const new_content = new Content();
    new_content.content_uuid = generateRandomId(
      'CO' + getRandomString(6), getToday(),
    );
    new_content.input_content = contentCreateDto.input_content;
    new_content.phone_number = contentCreateDto.phone_number;
    new_content.privacy_terms = true;

    await this.contentRepository.save(new_content);
  }
  
  public async findAllContent(): Promise<Content[]> {
    return this.contentRepository.find();
  }
}
