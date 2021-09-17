"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const platform_express_1 = require("@nestjs/platform-express");
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const typeorm_transactional_cls_hooked_1 = require("typeorm-transactional-cls-hooked");
const app_module_1 = require("./app.module");
const bad_request_filter_1 = require("./filters/bad-request.filter");
const query_failed_filter_1 = require("./filters/query-failed.filter");
const setup_swagger_1 = require("./setup-swagger");
const api_config_service_1 = require("./shared/services/api-config.service");
const shared_module_1 = require("./shared/shared.module");
async function bootstrap() {
    typeorm_transactional_cls_hooked_1.initializeTransactionalContext();
    typeorm_transactional_cls_hooked_1.patchTypeORMRepositoryWithBaseRepository();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(), { cors: true });
    app.enable('trust proxy');
    app.use(helmet_1.default());
    app.use(express_rate_limit_1.default({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.use(compression_1.default());
    app.use(morgan_1.default('combined'));
    app.enableCors();
    const reflector = app.get(core_1.Reflector);
    app.useGlobalFilters(new bad_request_filter_1.HttpExceptionFilter(reflector), new query_failed_filter_1.QueryFailedFilter(reflector));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        transform: true,
        dismissDefaultMessages: true,
        exceptionFactory: (errors) => new common_1.UnprocessableEntityException(errors),
    }));
    const configService = app.select(shared_module_1.SharedModule).get(api_config_service_1.ApiConfigService);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            port: 4000,
            retryAttempts: 5,
            retryDelay: 3000,
        },
    });
    await app.startAllMicroservicesAsync();
    if (['development', 'staging'].includes(configService.nodeEnv)) {
        setup_swagger_1.setupSwagger(app);
    }
    const port = configService.appConfig.port;
    await app.listen(port);
    console.info(`server running on port ${port}`);
    return app;
}
exports.bootstrap = bootstrap;
void bootstrap();
//# sourceMappingURL=main.js.map