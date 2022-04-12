import { BehaviorSubject, finalize, Observable } from 'rxjs';

export abstract class RestQuery {
	#isFetching$ = new BehaviorSubject(false);

	constructor() { }

	getIsFetching$(): Observable<boolean> {
		return this.#isFetching$.asObservable();
	}

	protected query$<Response>(request$: Observable<Response>): Observable<Response> {
		this.#isFetching$.next(true);

		return request$.pipe(
			finalize(() => this.#isFetching$.next(false)),
		);
	}
}
