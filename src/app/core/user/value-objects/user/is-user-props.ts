import { UserProps, UserPropsSchema } from './user-props';

export const isUserProps = (obj: unknown): obj is UserProps =>
	UserPropsSchema.safeParse(obj).success;
