import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3010', // Reactのフロントエンドからのリクエストを許可
    methods: 'GET,POST,PUT,DELETE', // 許可するHTTPメソッド
    allowedHeaders: 'Content-Type, Authorization', // 許可するヘッダー
  });

  await app.listen(3011);
}
bootstrap();
