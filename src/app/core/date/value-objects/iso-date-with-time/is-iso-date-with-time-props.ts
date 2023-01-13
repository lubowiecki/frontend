import { IsoDateWithTimeProps, IsoDateWithTimePropsSchema } from './iso-date-with-time-props';

export const isIsoDateWithTimeProps = (
	obj: unknown,
): obj is IsoDateWithTimeProps => IsoDateWithTimePropsSchema.safeParse(obj).success;
