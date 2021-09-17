"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const package_json_1 = require("../package.json");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setVersion(package_json_1.version)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('documentation', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=setup-swagger.js.map