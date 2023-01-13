import { IsoDateProps, IsoDatePropsSchema } from './iso-date-props';

export const isIsoDateProps = (
	obj: unknown,
): obj is IsoDateProps => IsoDatePropsSchema.safeParse(obj).success;
