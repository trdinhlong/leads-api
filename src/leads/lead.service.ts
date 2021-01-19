import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadService {
  getHello(): string {
    return 'Hello World!';
  }
}
