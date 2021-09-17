import { Global, HttpModule, Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

import { ApiConfigService } from './services/api-config.service';
import { TranslationService } from './services/translation.service';
import { ValidatorService } from './services/validator.service';

const providers = [
  ApiConfigService,
  ValidatorService,
  TranslationService,
  {
    provide: 'NATS_SERVICE',
    useFactory: (configService: ApiConfigService) => {
      const natsConfig = configService.natsConfig;
      return ClientProxyFactory.create({
        transport: Transport.NATS,
        options: {
          name: 'NATS_SERVICE',
          url: `nats://${natsConfig.host}:${natsConfig.port}`,
        },
      });
    },
    inject: [ApiConfigService],
  },
];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
