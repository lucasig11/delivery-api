import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateUserDTO } from './dto/authenticate-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('client')
  async signInClient(@Body() { email, password }: AuthenticateUserDTO) {
    const access_token = await this.authService.validateClient(email, password);
    return { access_token };
  }

  @Post('deliveryman')
  async signInDeliveryman(@Body() { email, password }: AuthenticateUserDTO) {
    const access_token = await this.authService.validateDeliveryman(
      email,
      password,
    );
    return { access_token };
  }
}
