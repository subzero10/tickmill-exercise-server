"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDParam = exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_user_interceptor_service_1 = require("../interceptors/auth-user-interceptor.service");
function Auth(...roles) {
    return common_1.applyDecorators(common_1.SetMetadata('roles', roles), swagger_1.ApiBearerAuth(), common_1.UseInterceptors(auth_user_interceptor_service_1.AuthUserInterceptor), swagger_1.ApiUnauthorizedResponse({ description: 'Unauthorized' }));
}
exports.Auth = Auth;
function UUIDParam(property, ...pipes) {
    return common_1.Param(property, new common_1.ParseUUIDPipe({ version: '4' }), ...pipes);
}
exports.UUIDParam = UUIDParam;
//# sourceMappingURL=http.decorators.js.map