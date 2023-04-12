import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { DeliverymanModule } from './modules/deliveryman/deliveryman.module';

@Module({
  imports: [AuthModule, ClientModule, DeliverymanModule, DeliveryModule],
  providers: [],
})
export class AppModule {}
