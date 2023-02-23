import { Module } from '@nestjs/common';
import { ContentModule } from './content/content.module';
import { ClickModule } from './click/click.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content/content.entity';
import { Click } from './click/click.entity';


@Module({
  imports: [
    ContentModule,
    ClickModule,
  ],
})
export class AppModule {}
