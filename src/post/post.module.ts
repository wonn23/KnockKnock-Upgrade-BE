import { Module } from '@nestjs/common'
import { PostService } from './post.service'
import { PostController } from './post.controller'
import { Join } from 'src/join/entities/join.entity'
import { User } from '../user/entities/user.entity'
import { Comment } from 'src/comment/entities/comment.entity'
import { Post } from 'src/post/entities/post.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [TypeOrmModule.forFeature([User, Post, Comment, Join])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
