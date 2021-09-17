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
exports.UserDto = void 0;
const api_property_decorator_1 = require("@nestjs/swagger/dist/decorators/api-property.decorator");
const role_type_1 = require("../../../common/constants/role-type");
const abstract_dto_1 = require("../../../common/dto/abstract.dto");
class UserDto extends abstract_dto_1.AbstractDto {
    constructor(user, options) {
        super(user);
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.role = user.role;
        this.email = user.email;
        this.avatar = user.avatar;
        this.phone = user.phone;
        this.isActive = options === null || options === void 0 ? void 0 : options.isActive;
    }
}
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional({ enum: role_type_1.RoleType }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    api_property_decorator_1.ApiPropertyOptional(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "isActive", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user-dto.js.map