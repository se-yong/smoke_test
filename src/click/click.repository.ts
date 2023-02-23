import { DataSource, EntityManager } from 'typeorm';
import { Click } from './click.entity';
import { Injectable } from '@nestjs/common';
import {
  generateRandomId,
  getRandomString,
  getToday,
} from '../utils';

export const clickProviders = [
  {
    provide: 'CLICK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Click),
    inject: ['DATA_SOURCE'],
  },
];

@Injectable()
export class ClickEventRepository {
  async createClickEvent(
    transactionManager: EntityManager,
  ): Promise<void> {
    const new_click = new Click();
    new_click.click_uuid = generateRandomId(
      'CL' + getRandomString(6), getToday(),
    );

    await transactionManager.save(new_click);
  }
}