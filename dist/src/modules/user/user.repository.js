"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = exports.ensureExhaustiveSwitch = void 0;
const typeorm_1 = require("typeorm");
const EntityRepository_1 = require("typeorm/decorator/EntityRepository");
const order_1 = require("../../common/constants/order");
const UsersPageOptionsDto_1 = require("./dto/UsersPageOptionsDto");
const user_entity_1 = require("./user.entity");
function ensureExhaustiveSwitch(x) {
    throw new Error('ensureExhaustiveSwitch');
}
exports.ensureExhaustiveSwitch = ensureExhaustiveSwitch;
let UserRepository = class UserRepository extends typeorm_1.Repository {
    applySearchCondition(qb, pageOptions) {
        if (pageOptions.q) {
            qb.where(`(user.first_name ILIKE :q
                          OR user.last_name ILIKE :q
                          OR user.email ILIKE :q)`, { q: `%${pageOptions.q}%`, lowerQ: pageOptions.q.toLowerCase() });
        }
    }
    addSortExpression(queryBuilder, pageOptions) {
        const nulls = pageOptions.order === order_1.Order.ASC ? 'NULLS LAST' : 'NULLS FIRST';
        switch (pageOptions.orderBy) {
            case UsersPageOptionsDto_1.UserOrderBy.firstName:
            case UsersPageOptionsDto_1.UserOrderBy.lastName:
            case UsersPageOptionsDto_1.UserOrderBy.email:
            case UsersPageOptionsDto_1.UserOrderBy.phone:
            case UsersPageOptionsDto_1.UserOrderBy.createdAt:
            case UsersPageOptionsDto_1.UserOrderBy.updatedAt:
                return queryBuilder.orderBy('user.' + pageOptions.orderBy, pageOptions.order, nulls);
            default:
                ensureExhaustiveSwitch(pageOptions.orderBy);
        }
    }
};
UserRepository = __decorate([
    EntityRepository_1.EntityRepository(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map