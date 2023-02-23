import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClickEventController } from './click.controller';
import { ClickEventRepository, clickProviders } from './click.repository';
import { ClickEventService } from './click.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ClickEventController],
  providers: [ClickEventService, ClickEventRepository, ...clickProviders],
})
export class ClickModule {}
