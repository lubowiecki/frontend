import { DateTime } from 'luxon';
import { z } from 'zod';

export const IsoDateWithTimePropsSchema = z.object({
	date: z.custom((v) => v instanceof DateTime),
});

export type IsoDateWithTimeProps = z.infer<typeof IsoDateWithTimePropsSchema>;
