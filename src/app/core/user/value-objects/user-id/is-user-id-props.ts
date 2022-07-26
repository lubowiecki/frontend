import { UserIdProps, UserIdPropsSchema } from './user-id-props';

export const isUserIdProps = (obj: unknown): obj is UserIdProps => UserIdPropsSchema.safeParse(obj).success;
