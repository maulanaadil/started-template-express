"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        code: statusCode,
        status: statusCode < 400 ? "success" : "failed",
        message,
        data,
    });
};
exports.default = response;
//# sourceMappingURL=response.js.map