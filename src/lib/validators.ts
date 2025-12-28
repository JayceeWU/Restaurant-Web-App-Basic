import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
import { Prisma } from "@/generated/prisma/client";

const currency = z
  .union([z.string(), z.number()])
  .transform((v) => formatNumberWithDecimal(Number(v)))
  .refine(
    (s) => /^\d+(\.\d{2})$/.test(s),
    "Price must have exactly two decimal places",
  )
  .transform((s) => new Prisma.Decimal(s));

// Schema for inserting products
export const insertProductSchema = z.object({
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  nameChinese: z.string().nullable(),
  category: z.string().nullable(),
  description: z.string().nullable(),
  price: currency,
  image: z.string().nullable(),
  isFeatured: z.boolean().default(false),
  outOfStock: z.boolean().default(false),
});
