import {
	isInstanceOf, isObject, isOfType, OfType, isDefined,
} from '@lubowiecki/ts-utility';

import { IsoDate } from '@core/date/value-objects/iso-date';
import { IsoDateWithTime } from '@core/date/value-objects/iso-date-with-time';

import { UserProps } from './user-props';
import { UserId } from '../user-id';

export const isUserProps = (obj: unknown): obj is UserProps =>
	isObject(obj) &&
	isInstanceOf(UserId, obj.id) &&
	isInstanceOf(IsoDateWithTime, obj.creationDate) &&
	(!isDefined(obj.content) || isInstanceOf(IsoDateWithTime, obj.updateDate)) &&
	isInstanceOf(IsoDate)(obj.year) &&
	isOfType(OfType.string, obj.firstname) &&
	isOfType(OfType.string)(obj.lastname);
