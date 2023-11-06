import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from 'src/user/entities/user.entity'
import { Post } from '../../post/entities/post.entity'

@Entity('comments')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', nullable: false })
  content: string

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post

  @ManyToOne(() => User, (user) => user.comments)
  user: User
}
