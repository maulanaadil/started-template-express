"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../services/post/routes"));
const router = (0, express_1.Router)();
router.use("/posts", routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map