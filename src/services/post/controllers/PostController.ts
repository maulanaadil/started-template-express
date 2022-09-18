import response from "@/helpers/response";
import httpCodes from "@/helpers/httpCodes";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return response(res, httpCodes.Ok, "Get all games success!", posts);
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
  } catch (error: any) {}
};

const updatePost = async (req: Request, res: Response) => {};

const deletePost = async (req: Request, res: Response) => {};

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
