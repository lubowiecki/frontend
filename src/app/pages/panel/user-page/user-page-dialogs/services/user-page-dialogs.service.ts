import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserPageDialogComponent } from '../components/user-page-dialog/user-page-dialog.component';

@Injectable()
export class UserPageDialogsService {
	constructor(private dialog: MatDialog) { }

	openDialog(): void {
		const ref = this.dialog.open(UserPageDialogComponent);

		ref.afterClosed().subscribe({
			complete: () => { console.log('complete service'); },
			next: (value) => console.log(`next service: ${value}`),
			error: (value) => console.log(`error service: ${value}`),
		});
	}
}
