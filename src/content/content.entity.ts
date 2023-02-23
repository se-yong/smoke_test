import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('content_tb')
export class Content {
  @PrimaryColumn()
  content_uuid: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ default: true })
  privacy_terms: boolean;

  @Column('text', { nullable: true })
  input_content: string;

  @CreateDateColumn()
  input_content_create_time: Date;
}