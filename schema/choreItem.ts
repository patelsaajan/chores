import { z } from "zod";

export const choreItemSchema = z.object({
  name: z.string().min(3),
  storyPoints: z.number().min(0),
});
