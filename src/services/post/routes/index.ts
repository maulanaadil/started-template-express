import { Router } from "express";
import post from "../controllers/PostController";
import uploadImage from "@/middlewares/validateUploadImage";

const router: Router = Router();

// get posts
router.get("/", post.getPosts);

// get a post by id
router.get("/:id", post.getPostById);

// create posts
router.post("/", uploadImage.single("image"), post.createPost);

// update post
router.patch("/:id", post.updatePost);

// delete post
router.delete("/:id", post.deletePost);

export default router;
