/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserDto } from '../models/user-dto';
import { UuidDto } from '../models/uuid-dto';

@Injectable({
	providedIn: 'root',
})
export class UserService extends BaseService {
	constructor(config: ApiConfiguration, http: HttpClient) {
		super(config, http);
	}

	/**
	 * Path part for operation getUser
	 */
	static readonly GetUserPath = '/user';

	/**
	 * Get user
	 *
	 * This method provides access to the full `HttpResponse`, allowing access to response headers.
	 * To access only the response body, use `getUser()` instead.
	 *
	 * This method doesn't expect any request body.
	 */
	getUser$Response(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
		},
		context?: HttpContext
	): Observable<StrictHttpResponse<UserDto>> {
		const rb = new RequestBuilder(
			this.rootUrl,
			UserService.GetUserPath,
			'get'
		);
		if (params) {
			rb.query('userId', params.userId, {});
		}

		return this.http
			.request(
				rb.build({
					responseType: 'json',
					accept: 'application/json',
					context: context,
				})
			)
			.pipe(
				filter((r: any) => r instanceof HttpResponse),
				map((r: HttpResponse<any>) => {
					return r as StrictHttpResponse<UserDto>;
				})
			);
	}

	/**
	 * Get user
	 *
	 * This method provides access only to the response body.
	 * To access the full response (for headers, for example), `getUser$Response()` instead.
	 *
	 * This method doesn't expect any request body.
	 */
	getUser(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
		},
		context?: HttpContext
	): Observable<UserDto> {
		return this.getUser$Response(params, context).pipe(
			map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
		);
	}

	/**
	 * Path part for operation updateUser
	 */
	static readonly UpdateUserPath = '/user';

	/**
	 * Update user
	 *
	 * This method provides access to the full `HttpResponse`, allowing access to response headers.
	 * To access only the response body, use `updateUser()` instead.
	 *
	 * This method sends `application/json` and handles request body of type `application/json`.
	 */
	updateUser$Response(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
			body: UserDto;
		},
		context?: HttpContext
	): Observable<StrictHttpResponse<UserDto>> {
		const rb = new RequestBuilder(
			this.rootUrl,
			UserService.UpdateUserPath,
			'put'
		);
		if (params) {
			rb.query('userId', params.userId, {});
			rb.body(params.body, 'application/json');
		}

		return this.http
			.request(
				rb.build({
					responseType: 'json',
					accept: 'application/json',
					context: context,
				})
			)
			.pipe(
				filter((r: any) => r instanceof HttpResponse),
				map((r: HttpResponse<any>) => {
					return r as StrictHttpResponse<UserDto>;
				})
			);
	}

	/**
	 * Update user
	 *
	 * This method provides access only to the response body.
	 * To access the full response (for headers, for example), `updateUser$Response()` instead.
	 *
	 * This method sends `application/json` and handles request body of type `application/json`.
	 */
	updateUser(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
			body: UserDto;
		},
		context?: HttpContext
	): Observable<UserDto> {
		return this.updateUser$Response(params, context).pipe(
			map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
		);
	}

	/**
	 * Path part for operation getUserCv
	 */
	static readonly GetUserCvPath = '/user/cv';

	/**
	 * Returns the CV.
	 *
	 * Get user
	 *
	 * This method provides access to the full `HttpResponse`, allowing access to response headers.
	 * To access only the response body, use `getUserCv()` instead.
	 *
	 * This method doesn't expect any request body.
	 */
	getUserCv$Response(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
		},
		context?: HttpContext
	): Observable<StrictHttpResponse<Blob>> {
		const rb = new RequestBuilder(
			this.rootUrl,
			UserService.GetUserCvPath,
			'get'
		);
		if (params) {
			rb.query('userId', params.userId, {});
		}

		return this.http
			.request(
				rb.build({
					responseType: 'blob',
					accept: 'application/pdf',
					context: context,
				})
			)
			.pipe(
				filter((r: any) => r instanceof HttpResponse),
				map((r: HttpResponse<any>) => {
					return r as StrictHttpResponse<Blob>;
				})
			);
	}

	/**
	 * Returns the CV.
	 *
	 * Get user
	 *
	 * This method provides access only to the response body.
	 * To access the full response (for headers, for example), `getUserCv$Response()` instead.
	 *
	 * This method doesn't expect any request body.
	 */
	getUserCv(
		params: {
			/**
			 * User id
			 */
			userId: UuidDto;
		},
		context?: HttpContext
	): Observable<Blob> {
		return this.getUserCv$Response(params, context).pipe(
			map((r: StrictHttpResponse<Blob>) => r.body as Blob)
		);
	}
}
