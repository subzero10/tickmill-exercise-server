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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const PageMetaDto_1 = require("../../common/dto/PageMetaDto");
const UsersPageDto_1 = require("./dto/UsersPageDto");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers(pageOptionsDto) {
        let query = this.userRepository
            .createQueryBuilder('user')
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take)
            .where(new typeorm_1.Brackets((qb) => this.userRepository.applySearchCondition(qb, pageOptionsDto)));
        query = this.userRepository.addSortExpression(query, pageOptionsDto);
        const [users, usersCount] = await query.getManyAndCount();
        const pageMetaDto = new PageMetaDto_1.PageMetaDto({
            pageOptionsDto,
            itemCount: usersCount,
        });
        return new UsersPageDto_1.UsersPageDto(users.toDtos(), pageMetaDto);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map