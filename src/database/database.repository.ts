import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Click } from 'src/click/click.entity';
import { Content } from 'src/content/content.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Content, Click],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],