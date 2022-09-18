"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("@/helpers/response"));
const httpCodes_1 = __importDefault(require("@/helpers/httpCodes"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield prisma.post.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return (0, response_1.default)(res, httpCodes_1.default.Ok, "Get all games success!", posts);
    }
    catch (error) {
        return (0, response_1.default)(res, httpCodes_1.default.InternalServerError, error.message, null);
    }
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.post.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        if (!post) {
            return (0, response_1.default)(res, httpCodes_1.default.NotFound, "Post not found!", null);
        }
        return (0, response_1.default)(res, httpCodes_1.default.Ok, "Get post success!", post);
    }
    catch (error) {
        return (0, response_1.default)(res, httpCodes_1.default.InternalServerError, error.message, null);
    }
});
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) { }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.default = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
//# sourceMappingURL=PostController.js.map