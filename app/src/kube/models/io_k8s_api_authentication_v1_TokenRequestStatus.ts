import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * TokenRequestStatus is the result of a token request.
 */
export type io_k8s_api_authentication_v1_TokenRequestStatus = {
	/**
	 * ExpirationTimestamp is the time of expiration of the returned token.
	 */
	expirationTimestamp: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Token is the opaque bearer token.
	 */
	token: string;
};

