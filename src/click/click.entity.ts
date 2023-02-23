import { CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('click_tb')
export class Click {
  @PrimaryColumn()
  click_uuid: string;

  @CreateDateColumn()
  click_create_time: Date;
}

