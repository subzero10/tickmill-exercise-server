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
exports.UsersPageOptionsDto = exports.UserOrderBy = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PageOptionsDto_1 = require("../../../common/dto/PageOptionsDto");
var UserOrderBy;
(function (UserOrderBy) {
    UserOrderBy["firstName"] = "firstName";
    UserOrderBy["lastName"] = "lastName";
    UserOrderBy["phone"] = "phone";
    UserOrderBy["email"] = "email";
    UserOrderBy["createdAt"] = "createdAt";
    UserOrderBy["updatedAt"] = "updatedAt";
})(UserOrderBy = exports.UserOrderBy || (exports.UserOrderBy = {}));
class UsersPageOptionsDto extends PageOptionsDto_1.PageOptionsDto {
    constructor() {
        super(...arguments);
        this.orderBy = UserOrderBy.firstName;
    }
}
__decorate([
    swagger_1.ApiPropertyOptional({
        enum: UserOrderBy,
        default: UserOrderBy.firstName,
    }),
    class_validator_1.IsEnum(UserOrderBy),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UsersPageOptionsDto.prototype, "orderBy", void 0);
exports.UsersPageOptionsDto = UsersPageOptionsDto;
//# sourceMappingURL=UsersPageOptionsDto.js.map