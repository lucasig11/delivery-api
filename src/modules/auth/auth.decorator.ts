import { SetMetadata } from '@nestjs/common';

export type Role = 'client' | 'deliveryman';

export const Auth = (role: Role = 'client') => SetMetadata('role', role);
