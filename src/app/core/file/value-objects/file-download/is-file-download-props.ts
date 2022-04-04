import { HttpEventType } from '@angular/common/http';
import {
	isDefined,
	isInstanceOf, isObject, isOfType, OfType,
} from '@lubowiecki/ts-utility';
import * as R from 'ramda';

import { FileDownloadProps } from './file-download-props';

export const isFileDownloadProps = (obj: unknown): obj is FileDownloadProps =>
	isObject(obj) &&
	R.any(R.equals(obj.state), R.values(HttpEventType)) &&
	isOfType(OfType.number, obj.progress) &&
	(!isDefined(obj.content) || isInstanceOf(Blob, obj.content)) &&
	(!isDefined(obj.name) || isOfType(OfType.string, obj.name));
