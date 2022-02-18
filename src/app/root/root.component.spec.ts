import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootComponent } from './root.component';
import { RootModule } from './root.module';

describe('RootComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				RootModule,
			],
			declarations: [
				RootComponent,
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(RootComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
