import {
	FileDownloadProps,
	FileDownloadPropsSchema,
} from './file-download-props';

export const isFileDownloadProps = (obj: unknown): obj is FileDownloadProps =>
	FileDownloadPropsSchema.safeParse(obj).success;
