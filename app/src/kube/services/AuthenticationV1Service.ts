import type { io_k8s_api_authentication_v1_SelfSubjectReview } from '../models/io_k8s_api_authentication_v1_SelfSubjectReview';
import type { io_k8s_api_authentication_v1_TokenReview } from '../models/io_k8s_api_authentication_v1_TokenReview';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataCreateAuthenticationV1SelfSubjectReview = {
                body: io_k8s_api_authentication_v1_SelfSubjectReview
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataCreateAuthenticationV1TokenReview = {
                body: io_k8s_api_authentication_v1_TokenReview
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }

export class AuthenticationV1Service {

	/**
	 * get available resources
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList OK
	 * @throws ApiError
	 */
	public static getAuthenticationV1ApiResources(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/authentication.k8s.io/v1/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a SelfSubjectReview
	 * @returns io_k8s_api_authentication_v1_SelfSubjectReview OK
	 * @throws ApiError
	 */
	public static createAuthenticationV1SelfSubjectReview(data: TDataCreateAuthenticationV1SelfSubjectReview): CancelablePromise<io_k8s_api_authentication_v1_SelfSubjectReview> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/authentication.k8s.io/v1/selfsubjectreviews',
			query: {
				dryRun, fieldManager, fieldValidation, pretty
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a TokenReview
	 * @returns io_k8s_api_authentication_v1_TokenReview OK
	 * @throws ApiError
	 */
	public static createAuthenticationV1TokenReview(data: TDataCreateAuthenticationV1TokenReview): CancelablePromise<io_k8s_api_authentication_v1_TokenReview> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/authentication.k8s.io/v1/tokenreviews',
			query: {
				dryRun, fieldManager, fieldValidation, pretty
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}