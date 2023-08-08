import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("A senha é obrigatória"),
});

export type LoginData = z.infer<typeof schema>;
