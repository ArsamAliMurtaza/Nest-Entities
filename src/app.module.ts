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
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { User2Entity } from './user2/entities/user2.entity';
import { User3Entity } from './user3/entities/user3.entity';
import { User4Entity } from './user4/entities/user4.entity';
import { User5Entity } from './user5/entities/user5.entity';
import { User6Entity } from './user6/entities/user6.entity';
import { User7Entity } from './user7/entities/user7.entity';
import { User8Entity } from './user8/entities/user8.entity';
import { User9Entity } from './user9/entities/user9.entity';
import { User10Entity } from './user10/entities/user10.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'iec',
      password: 'iecpassword',
      database: 'iec',
      // entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
      entities: [
        UserEntity,
        User2Entity,
        User3Entity,
        User4Entity,
        User5Entity,
        User6Entity,
        User7Entity,
        User8Entity,
        User9Entity,
        User10Entity,
      ],
      synchronize: true,
    }),
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
