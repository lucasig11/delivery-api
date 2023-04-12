import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateClientDTO } from './dto/authenticate-client.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signInClient(@Body() { email, password }: AuthenticateClientDTO) {
    const access_token = await this.authService.validateClient(email, password);
    return { access_token };
  }
}
