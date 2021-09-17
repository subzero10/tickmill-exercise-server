"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
require("./boilerplate.polyfill");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_i18n_1 = require("nestjs-i18n");
const path_1 = __importDefault(require("path"));
const middlewares_1 = require("./middlewares");
const user_module_1 = require("./modules/user/user.module");
const api_config_service_1 = require("./shared/services/api-config.service");
const shared_module_1 = require("./shared/shared.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middlewares_1.contextMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [shared_module_1.SharedModule],
                useFactory: (configService) => configService.typeOrmConfig,
                inject: [api_config_service_1.ApiConfigService],
            }),
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: (configService) => ({
                    fallbackLanguage: configService.fallbackLanguage,
                    parserOptions: {
                        path: path_1.default.join(__dirname, '/i18n/'),
                        watch: configService.isDevelopment,
                    },
                }),
                imports: [shared_module_1.SharedModule],
                parser: nestjs_i18n_1.I18nJsonParser,
                inject: [api_config_service_1.ApiConfigService],
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map