import { object, string } from "zod";

export const CreatePostSchema = object({
  file: object({
    filename: string(),
  }),
  body: object({
    authorId: string({
      required_error: "authorId is required!",
    }),
    title: string({
      required_error: "title is required!",
    }).min(8),
    description: string({
      required_error: "description is required!",
    }),
    published: string({
      required_error: "published is required!",
    }),
  }),
});

export const UpdatePostSchema = object({
  file: object({
    filename: string(),
  }),
  body: object({
    title: string({
      required_error: "title is required!",
    }).min(8),
    description: string({
      required_error: "description is required!",
    }).min(10),
    published: string({
      required_error: "published is required!",
    }),
  }),
});
