import { HttpEventType } from '@angular/common/http';
import { Maybe } from '@opi_pib/ts-utility';

export interface FileDownloadProps {
	state: HttpEventType;
	progress: number;
	content: Maybe<Blob>;
	name: Maybe<string>;
}
