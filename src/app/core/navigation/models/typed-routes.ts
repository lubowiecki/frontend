import { Data } from '@angular/router';

import { Paths } from './paths';

type TypedPath = {
	path: string;
	data?: Data;
	queryParams?: Record<string, unknown>;
}

export interface TypedRoutes extends Record<Paths, TypedPath> {
	[Paths.Root]: {
		path: '';
	},
	[Paths.Panel]: {
		path: 'panel';
		data?: {
			accesses: string[];
		};
	},
	[Paths.User]: {
		path: 'user';
		queryParams?: {
			id: number;
		};
	},
	[Paths.Websocket]: {
		path: 'websocket';
	},
	[Paths.Eventsource]: {
		path: 'eventsource';
	}
}
