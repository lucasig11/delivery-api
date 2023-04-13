import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { ClientService } from '../client/client.service';
import { DeliverymanService } from '../deliveryman/deliveryman.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private clientService: ClientService,
    private deliverymanService: DeliverymanService,
  ) {}

  async validateClient(email: string, pass: string): Promise<string> {
    const client = await this.clientService.findByEmail(email);
    if (!client || !compareSync(pass, client.password)) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return this.jwtService.sign(
      { email },
      { subject: client.id, secret: jwtConstants.clientSecret },
    );
  }

  async validateDeliveryman(email: string, pass: string): Promise<string> {
    const deliveryman = await this.deliverymanService.findByEmail(email);
    if (!deliveryman || !compareSync(pass, deliveryman.password)) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return this.jwtService.sign(
      { email },
      { subject: deliveryman.id, secret: jwtConstants.deliverymanSecret },
    );
  }
}
