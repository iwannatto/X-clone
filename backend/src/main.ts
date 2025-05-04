import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3010', // Reactのフロントエンドからのリクエストを許可
    methods: 'GET,POST,PUT,DELETE', // 許可するHTTPメソッド
    allowedHeaders: 'Content-Type, Authorization', // 許可するヘッダー
  });

  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
  });

  await app.listen(3011);
}
bootstrap();
