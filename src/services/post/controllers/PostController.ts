import response from "@/helpers/response";
import httpCodes from "@/helpers/httpCodes";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { zParse } from "@/middlewares/validateResource";
import { CreatePostSchema, UpdatePostSchema } from "../schema/posts.schema";

const prisma = new PrismaClient();

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return response(res, httpCodes.Ok, "Get all posts success!", posts);
  } catch (error: any) {
    return response(res, httpCodes.InternalServerError, error.message, null);
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!post) {
      return response(res, httpCodes.NotFound, "Post not found!", null);
    }

    return response(res, httpCodes.Ok, "Get post success!", post);
  } catch (error: any) {
    return response(res, httpCodes.InternalServerError, error.message, null);
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const imageUrl = req.file?.filename;
    const { title, published, authorId } = req.body;
    await zParse(CreatePostSchema, req);

    const post = await prisma.post.create({
      data: {
        authorId: parseInt(authorId),
        title,
        imageUrl,
        published: published === "true" ? true : false,
      },
    });

    return response(res, httpCodes.Created, "Create post success!", post);
  } catch (error: any) {
    return response(res, httpCodes.InternalServerError, error.message, null);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const imageUrl = req.file?.filename;
    const { title, published } = req.body;

    const selectedPost = await prisma.post.findFirst({
      where: { id: parseInt(id) },
    });

    if (!selectedPost) {
      return response(res, httpCodes.NotFound, "Post not found!", null);
    }

    await zParse(UpdatePostSchema, req);
    const updatePost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: title || undefined,
        imageUrl: imageUrl || undefined,
        published: published === "true" ? true : false,
      },
    });
    return response(res, httpCodes.Ok, "Update post success!", updatePost);
  } catch (error: any) {
    return response(res, httpCodes.InternalServerError, error.message, null);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const selectedPost = await prisma.post.findFirst({
      where: { id: parseInt(id) },
    });

    if (!selectedPost) {
      return response(res, httpCodes.NotFound, "Post not found!", null);
    }

    await prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });

    return response(res, httpCodes.Ok, "Delete post success!", null);
  } catch (error: any) {
    return response(res, httpCodes.InternalServerError, error.message, null);
  }
};

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
