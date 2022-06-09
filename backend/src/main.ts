import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Todo App')
    .setDescription('The Todo App api documentation ')
    .setVersion('1.0')
    .addTag('todos', 'Todo items related endpoints')
    .addTag('groups', 'Todo group related endpoints')

    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1/docs', app, document, {
    customSiteTitle: 'Todo App',
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  await app.listen(process.env.SERVER_PORT || 3031);
}
bootstrap();
