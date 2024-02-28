import { z } from "zod";

export const validationSchema = z.object({
  fullname: z.string({
    required_error: "Fullname is required.",
  }),
  email: z.string({
    required_error: "Email is required.",
  }),
  subject: z.string({
    required_error: "Subject is required.",
  }),
  message: z.string({
    required_error: "Message is required.",
  }),
});
