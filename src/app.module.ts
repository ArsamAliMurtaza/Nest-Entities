import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User2Module } from './user2/user2.module';
import { User3Module } from './user3/user3.module';
import { User4Module } from './user4/user4.module';
import { User5Module } from './user5/user5.module';
import { User6Module } from './user6/user6.module';
import { User7Module } from './user7/user7.module';
import { User8Module } from './user8/user8.module';
import { User9Module } from './user9/user9.module';
import { User10Module } from './user10/user10.module';
import { UserAdminController } from './user/user-admin.controller';

@Module({
  imports: [
    UserModule,
    User2Module,
    User3Module,
    User4Module,
    User5Module,
    User6Module,
    User7Module,
    User8Module,
    User9Module,
    User10Module,
  ],
  controllers: [AppController, UserAdminController],
  providers: [AppService],
})
export class AppModule {}
