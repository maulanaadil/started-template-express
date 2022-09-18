"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controllers/PostController"));
const router = (0, express_1.Router)();
// get posts
router.get("/", PostController_1.default.getPosts);
// get a post by id
router.get("/:id", PostController_1.default.getPostById);
// create posts
router.post("/", PostController_1.default.createPost);
// update post
router.patch("/:id", PostController_1.default.updatePost);
// delete post
router.delete("/:id", PostController_1.default.deletePost);
exports.default = router;
//# sourceMappingURL=index.js.map