import { HttpEventType } from '@angular/common/http';
import { z } from 'zod';

export const FileDownloadPropsSchema = z.object({
	state: z.nativeEnum(HttpEventType),
	progress: z.number(),
	content: z.instanceof(Blob).nullable(),
	name: z.string().nullable(),
});

export type FileDownloadProps = z.infer<typeof FileDownloadPropsSchema>;
