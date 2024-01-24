import express from "express";
import postsController from "../controllers/posts.controller";

const router = express.Router();

router.post("/fetchAPI", postsController.savePostController);

export default router;
