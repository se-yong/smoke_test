import { DataSource, EntityManager } from 'typeorm';
import { Content } from './content.entity';
import { ContentCreateDto } from './content.dto';
import { Injectable } from '@nestjs/common';
import {
  generateRandomId,
  getRandomString,
  getToday,
} from '../utils';

export const contentProviders = [
  {
    provide: 'CONTENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Content),
    inject: ['DATA_SOURCE'],
  },
];

@Injectable()
export class ContentRepository {
  async createContent(
    transactionManager: EntityManager,
    contentCreateDto: ContentCreateDto,
  ): Promise<void> {
    const new_content = new Content();
    new_content.content_uuid = generateRandomId(
      'CO' + getRandomString(6), getToday(),
    );
    new_content.input_content = contentCreateDto.input_content;
    new_content.phone_number = contentCreateDto.phone_number;
    new_content.privacy_terms = true;

    await transactionManager.save(new_content);
  }
}