import { isObject, isOfType, OfType } from '@lubowiecki/ts-utility';

import { UserIdProps } from './user-id-props';

export const isUserIdProps = (obj: unknown): obj is UserIdProps =>
	isObject(obj) &&
	isOfType(OfType.string, obj.id);
