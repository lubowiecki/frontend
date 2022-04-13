import * as R from 'ramda';
import {
	BehaviorSubject, combineLatest, finalize, map, Observable,
} from 'rxjs';

export abstract class RestQuery {
	#isFetching$ = new BehaviorSubject(false);

	static isFetchingAny$(sources$: Observable<boolean>[]): Observable<boolean> {
		return combineLatest(sources$).pipe(map((states) => R.any((state) => state === true, states)));
	}

	constructor() { }

	isFetching$(): Observable<boolean> {
		return this.#isFetching$.asObservable();
	}

	protected query$<Response>(request$: Observable<Response>): Observable<Response> {
		this.#isFetching$.next(true);

		return request$.pipe(
			finalize(() => this.#isFetching$.next(false)),
		);
	}
}
