import { HttpEventType } from '@angular/common/http';
import {
	isInstanceOf, isObject, isOfType, isOptional, OfType,
} from '@lubowiecki/ts-utility';
import * as R from 'ramda';

import { FileDownloadProps } from './file-download-props';

export const isFileDownloadProps = (obj: unknown): obj is FileDownloadProps =>
	isObject(obj) &&
	R.any(R.equals(obj.state), R.values(HttpEventType)) &&
	isOfType(OfType.number, obj.progress) &&
	isOptional(isInstanceOf(Blob), obj.content) &&
	isOptional(isOfType(OfType.string), obj.name);
