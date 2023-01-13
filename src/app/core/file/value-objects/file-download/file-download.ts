import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
	always, Is, Maybe, ValueObject,
} from '@opi_pib/ts-utility';

import { FileDownloadProps } from './file-download-props';
import { isFileDownloadProps } from './is-file-download-props';

export class FileDownload extends ValueObject<FileDownloadProps> {
	constructor(protected override readonly props: FileDownloadProps) {
		super(props);
	}

	static create(props: FileDownloadProps): FileDownload {
		always(isFileDownloadProps(props), '60puczxj');

		return new FileDownload(props);
	}

	static fromHttpEvent(event: HttpEvent<Blob>): FileDownload {
		let type = '';
		let name: Maybe<string> = null;
		let progress = 0;
		let content: Maybe<Blob> = null;

		if (event.type === HttpEventType.Response) {
			type = event.headers.get('content-type') ?? '';
			name = event.headers.get('x-file-name');
			progress = 100;

			content = event.body ? new Blob([event.body], { type }) : null;
		} else if (event.type === HttpEventType.DownloadProgress && Is.number(event.total)) {
			progress = Math.floor((event.loaded / event.total) * 100);
		}

		return this.create({
			progress,
			content,
			name,
			state: event.type,
		});
	}

	get state(): HttpEventType {
		return this.props.state;
	}

	get progress(): number {
		return this.props.progress;
	}

	get content(): Maybe<Blob> {
		return this.props.content;
	}

	get name(): Maybe<string> {
		return this.props.name;
	}

	saveLocally(): void {
		if (!(this.content && this.name)) return;

		const anchorElement = document.createElement('a');
		const href = URL.createObjectURL(this.content);

		anchorElement.href = href;
		anchorElement.download = this.name;
		anchorElement.click();

		URL.revokeObjectURL(href);
	}
}
