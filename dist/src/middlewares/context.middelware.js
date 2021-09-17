"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextMiddleware = void 0;
const request_context_1 = __importDefault(require("request-context"));
exports.contextMiddleware = request_context_1.default.middleware('request');
//# sourceMappingURL=context.middelware.js.map