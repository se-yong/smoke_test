import { Injectable, Inject } from '@nestjs/common';
import { ClickEventRepository } from './click.repository';
import { Repository } from 'typeorm';
import { Click } from './click.entity';
import { generateRandomId, getRandomString, getToday } from 'src/utils';

@Injectable()
export class ClickEventService {
  constructor(
    @Inject('CLICK_REPOSITORY')
    private createClickRepository: Repository<Click>,
  ) {}

  public async createClickEvent() 
  : Promise<void> {
    const new_click = new Click();
    new_click.click_uuid = generateRandomId(
      'CL' + getRandomString(6), getToday(),
    );

    await this.createClickRepository.save(new_click);
  } 
}
