import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { ClientService } from '../client/client.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private clientService: ClientService,
  ) {}

  async validateClient(email: string, pass: string): Promise<string> {
    const client = await this.clientService.findByEmail(email);
    if (!client || !compareSync(pass, client.password)) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    return this.jwtService.sign({ email }, { subject: client.id });
  }
}
