import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 グローバルモジュールにする
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 他のモジュールで使えるように
})
export class PrismaModule {}
