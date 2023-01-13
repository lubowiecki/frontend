import { DateTime } from 'luxon';
import { z } from 'zod';

export const IsoDatePropsSchema = z.object({
	date: z.custom((v) => v instanceof DateTime),
});

export type IsoDateProps = z.infer<typeof IsoDatePropsSchema>;
