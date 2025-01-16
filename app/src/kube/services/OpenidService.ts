
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class OpenidService {

	/**
	 * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
	 * @returns string OK
	 * @throws ApiError
	 */
	public static getServiceAccountIssuerOpenIdKeyset(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/openid/v1/jwks/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}