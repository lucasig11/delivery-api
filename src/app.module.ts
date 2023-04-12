import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';

@Module({
  imports: [AuthModule, ClientModule, DeliverymanModule],
  providers: [],
})
export class AppModule {}
