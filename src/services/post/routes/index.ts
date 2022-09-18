import { Router } from "express";
import post from "../controllers/PostController";

const router: Router = Router();

// get posts
router.get("/", post.getPosts);

// get a post by id
router.get("/:id", post.getPostById);

// create posts
router.post("/", post.createPost);

// update post
router.patch("/:id", post.updatePost);

// delete post
router.delete("/:id", post.deletePost);

export default router;
