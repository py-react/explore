
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class WellKnownService {

	/**
	 * get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
	 * @returns string OK
	 * @throws ApiError
	 */
	public static getServiceAccountIssuerOpenIdConfiguration(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/.well-known/openid-configuration/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}