import { Router } from "express";
import postsService from "../services/post/routes";

const router: Router = Router();

router.use("/posts", postsService);

export default router;
