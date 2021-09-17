"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const http_1 = require("http");
const lodash_1 = __importDefault(require("lodash"));
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(reflector) {
        this.reflector = reflector;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let statusCode = exception.getStatus();
        const r = exception.getResponse();
        if (lodash_1.default.isArray(r.message) && r.message[0] instanceof class_validator_1.ValidationError) {
            statusCode = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
            r.error = http_1.STATUS_CODES[statusCode];
            const validationErrors = r.message;
            this.validationFilter(validationErrors);
        }
        r.statusCode = statusCode;
        r.error = http_1.STATUS_CODES[statusCode];
        response.status(statusCode).json(r);
    }
    validationFilter(validationErrors) {
        for (const validationError of validationErrors) {
            if (!lodash_1.default.isEmpty(validationError.children)) {
                this.validationFilter(validationError.children);
                return;
            }
            for (const [constraintKey, constraint] of Object.entries(validationError.constraints)) {
                if (!constraint) {
                    validationError.constraints[constraintKey] = `error.fields.${lodash_1.default.snakeCase(constraintKey)}`;
                }
            }
        }
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.UnprocessableEntityException),
    __metadata("design:paramtypes", [core_1.Reflector])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=bad-request.filter.js.map