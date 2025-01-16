

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 */
export type io_k8s_api_core_v1_HTTPHeader = {
	/**
	 * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
	 */
	name: string;
	/**
	 * The header field value
	 */
	value: string;
};

