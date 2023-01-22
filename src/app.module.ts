import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicadorService } from './services/indicador/service.service';
import { HttpModule } from '@nestjs/axios';
import { DolarController } from './api/dolar/dolar.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule,ConfigModule.forRoot(),
  ],
  controllers: [AppController, DolarController],
  providers: [AppService, IndicadorService],
})
export class AppModule {}
