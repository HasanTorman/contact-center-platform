import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getStatus() {
    return {
      status: 'ok',
      service: 'contact-center-api',
      timestamp: new Date().toISOString(),
    };
  }
}