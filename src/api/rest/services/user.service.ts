/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getUser } from '../fn/user/get-user';
import { GetUser$Params } from '../fn/user/get-user';
import { getUserCv } from '../fn/user/get-user-cv';
import { GetUserCv$Params } from '../fn/user/get-user-cv';
import { updateUser } from '../fn/user/update-user';
import { UpdateUser$Params } from '../fn/user/update-user';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUser()` */
  static readonly GetUserPath = '/user';

  /**
   * Get user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params: GetUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return getUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params: GetUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.getUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/user';

  /**
   * Update user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Update user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `getUserCv()` */
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
  getUserCv$Response(params: GetUserCv$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return getUserCv(this.http, this.rootUrl, params, context);
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
  getUserCv(params: GetUserCv$Params, context?: HttpContext): Observable<Blob> {
    return this.getUserCv$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
