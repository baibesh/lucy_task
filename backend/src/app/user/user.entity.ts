import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    comment: 'Почта пользователя',
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}
