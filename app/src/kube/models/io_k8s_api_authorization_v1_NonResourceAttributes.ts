

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export type io_k8s_api_authorization_v1_NonResourceAttributes = {
	/**
	 * Path is the URL path of the request
	 */
	path?: string;
	/**
	 * Verb is the standard HTTP verb
	 */
	verb?: string;
};

