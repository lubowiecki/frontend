import { z } from 'zod';

export const UserIdPropsSchema = z.object({
	id: z.string(),
});

export type UserIdProps = z.infer<typeof UserIdPropsSchema>;
