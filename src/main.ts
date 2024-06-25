/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentOptions = new DocumentBuilder()
   .setTitle('RES API')
   .setDescription('Api de la creatura BANSHEE')
   .setVersion('0.1')
   .build();

   const document = SwaggerModule.createDocument(app, documentOptions);
   SwaggerModule.setup('api',app,document);
   app.enableCors({
    origin: 'http://localhost:4200'
  });
  await app.listen(3000);
}
bootstrap();
