import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z
    .string()
    .min(8)
    .refine(value =>
      /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+{}<>:;,.?~\\/])/.test(value),
    ),
  confirmation: z.string().min(1),
  phone: z.string().min(1),
});

export const formSchemaLogin = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const ContactSchemaUpdate = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export const UserSchemaUpdate = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
});

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  id: z.string(),
  createdAt: z.string(),
});

export const contactSchema = z.object({
  email: z.string().email().min(1),
  name: z.string().min(3),
  phone: z.string().min(11),
});

export type TFormSchema = z.infer<typeof formSchema>;
export type TFormSchemaLogin = z.infer<typeof formSchemaLogin>;
export type TUserSchema = z.infer<typeof UserSchema>;
export type TContactSchemaUpdate = z.infer<typeof ContactSchemaUpdate>;
export type TUserSchemaUpdate = z.infer<typeof UserSchemaUpdate>;
export type TContactData = z.infer<typeof contactSchema>;
