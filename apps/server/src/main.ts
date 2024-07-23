import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as YAML from 'yamljs';
import { join } from 'path';

async function bootstrap() {
  try { 
    const app = await NestFactory.create(AppModule); 
     const yamlDocumentPath = join(__dirname, '..', 'swagger-spec.yaml');
    const document = YAML.load(yamlDocumentPath); 
    SwaggerModule.setup('swagger', app, document, {
      jsonDocumentUrl: 'swagger/yaml',
    });     
    await app.listen(3000);      
  } catch (error) {
    console.log(error);  
  } 
}
bootstrap();