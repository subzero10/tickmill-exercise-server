"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsProvider = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class UtilsProvider {
    static toDto(model, entity, options) {
        if (Array.isArray(entity)) {
            return entity.map((u) => new model(u, options));
        }
        return new model(entity, options);
    }
    static generateHash(password) {
        return bcrypt_1.default.hashSync(password, 10);
    }
    static generateRandomString(length) {
        return Math.random()
            .toString(36)
            .replace(/[^\dA-Za-z]+/g, '')
            .slice(0, Math.max(0, length));
    }
    static validateHash(password, hash) {
        if (!password || !hash) {
            return Promise.resolve(false);
        }
        return bcrypt_1.default.compare(password, hash);
    }
}
exports.UtilsProvider = UtilsProvider;
//# sourceMappingURL=utils.provider.js.map