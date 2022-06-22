 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './contact/contact.controller'
import { ContactService } from './contact/contact.service';
@Module({ imports: [ TypeOrmModule.forRoot({ type: 'postgres',
 database: 'postgres',
 username: 'postgres',
 password: 'admin',entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, }),
   TypeOrmModule.forFeature([Contact]),
],  controllers: [AppController,ContactController],
  providers: [AppService,ContactService],
})
export class AppModule {}

