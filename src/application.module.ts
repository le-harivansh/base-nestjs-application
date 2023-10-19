import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import applicationConfiguration from './application.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: process.env.NODE_ENV === 'production',
    }),
    ConfigModule.forFeature(applicationConfiguration),
  ],
})
export class ApplicationModule {}
