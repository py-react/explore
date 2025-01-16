

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export type io_k8s_api_authentication_v1_BoundObjectReference = {
	/**
	 * API version of the referent.
	 */
	apiVersion?: string;
	/**
	 * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
	 */
	kind?: string;
	/**
	 * Name of the referent.
	 */
	name?: string;
	/**
	 * UID of the referent.
	 */
	uid?: string;
};

