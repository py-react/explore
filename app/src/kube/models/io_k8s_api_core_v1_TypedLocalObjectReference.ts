

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export type io_k8s_api_core_v1_TypedLocalObjectReference = {
	/**
	 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
	 */
	apiGroup?: string;
	/**
	 * Kind is the type of resource being referenced
	 */
	kind: string;
	/**
	 * Name is the name of resource being referenced
	 */
	name: string;
};

