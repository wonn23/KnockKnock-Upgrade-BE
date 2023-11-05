import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { JoinModule } from './join/join.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PostModule, CommentModule, JoinModule, AuthModule],
})
export class AppModule {}
