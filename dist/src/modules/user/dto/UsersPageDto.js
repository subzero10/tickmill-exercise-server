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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersPageDto = void 0;
const api_model_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-model-property.decorator");
const PageMetaDto_1 = require("../../../common/dto/PageMetaDto");
const user_dto_1 = require("./user-dto");
class UsersPageDto {
    constructor(data, meta) {
        this.data = data;
        this.meta = meta;
    }
}
__decorate([
    api_model_property_decorator_1.ApiModelProperty({
        type: user_dto_1.UserDto,
        isArray: true,
    }),
    __metadata("design:type", Array)
], UsersPageDto.prototype, "data", void 0);
__decorate([
    api_model_property_decorator_1.ApiModelProperty(),
    __metadata("design:type", PageMetaDto_1.PageMetaDto)
], UsersPageDto.prototype, "meta", void 0);
exports.UsersPageDto = UsersPageDto;
//# sourceMappingURL=UsersPageDto.js.map