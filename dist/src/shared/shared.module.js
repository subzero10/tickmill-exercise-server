"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const api_config_service_1 = require("./services/api-config.service");
const translation_service_1 = require("./services/translation.service");
const validator_service_1 = require("./services/validator.service");
const providers = [
    api_config_service_1.ApiConfigService,
    validator_service_1.ValidatorService,
    translation_service_1.TranslationService,
    {
        provide: 'NATS_SERVICE',
        useFactory: (configService) => {
            const natsConfig = configService.natsConfig;
            return microservices_1.ClientProxyFactory.create({
                transport: microservices_1.Transport.NATS,
                options: {
                    name: 'NATS_SERVICE',
                    url: `nats://${natsConfig.host}:${natsConfig.port}`,
                },
            });
        },
        inject: [api_config_service_1.ApiConfigService],
    },
];
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Global(),
    common_1.Module({
        providers,
        imports: [common_1.HttpModule],
        exports: [...providers, common_1.HttpModule],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map