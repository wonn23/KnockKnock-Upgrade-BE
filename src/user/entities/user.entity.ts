import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Mbti, Region } from '../types/user.enum'
import { Tag } from './tag.entity'
import { Post } from 'src/post/entities/post.entity'
import { Join } from 'src/join/entities/join.entity'
import { Comment } from 'src/comment/entities/comment.entity'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', nullable: false })
  email: string

  @Column({ type: 'varchar', nullable: false })
  nickname: string

  @Column({ type: 'varchar', nullable: false })
  password: string

  @Column({ type: 'varchar', nullable: false })
  gender: string

  @Column({ type: 'varchar', nullable: false })
  birthday: string

  @Column({ type: 'varchar', nullable: false })
  job: string

  @Column({
    type: 'enum',
    enum: Region,
    nullable: false,
    default: Region.SEOUL,
  })
  region: Region

  @Column({ type: 'enum', enum: Mbti, nullable: false })
  mbti: Mbti

  @Column({ type: 'varchar', nullable: false })
  height: string

  @Column({ type: 'varchar', length: 255 })
  introduce: string

  @Column({ type: 'varchar', default: false, nullable: false })
  isDeleted: boolean

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]

  @OneToMany(() => Join, (join) => join.user)
  joins: Join[]

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable({
    name: 'user_tag',
    joinColumn: { name: 'tag_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
  })
  tags: Tag[]
}
