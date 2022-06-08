import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo.module';
import { ConfigModule } from '@nestjs/config';
import { pgConfig } from './config';

/**
 * Note: pgConfig is objec that contains config, outside docker it might not work, if you face this rather copy pg configs object data into the forRoot({.}).
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../.env' }),
    TypeOrmModule.forRoot(pgConfig),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
