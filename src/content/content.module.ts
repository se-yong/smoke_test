import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { ContentController } from './content.controller';
import { Content } from './content.entity';
import { contentProviders, ContentRepository } from './content.repository';
import { ContentService } from './content.service';


@Module({
  imports: [DatabaseModule],
  controllers: [ContentController],
  providers: [ContentService, ContentRepository, ...contentProviders],
})
export class ContentModule {}
