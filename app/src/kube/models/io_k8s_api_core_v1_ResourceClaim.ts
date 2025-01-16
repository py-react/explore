

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export type io_k8s_api_core_v1_ResourceClaim = {
	/**
	 * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
	 */
	name: string;
};

