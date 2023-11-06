import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmExModule } from 'src/common/decoretor/typeorm-ex.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Join } from 'src/join/entities/join.entity'
import { User } from './entities/user.entity'
import { Comment } from 'src/comment/entities/comment.entity'
import { Post } from 'src/post/entities/post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Comment, Join])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
