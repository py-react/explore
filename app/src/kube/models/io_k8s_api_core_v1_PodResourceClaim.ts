import type { io_k8s_api_core_v1_ClaimSource } from './io_k8s_api_core_v1_ClaimSource';

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 */
export type io_k8s_api_core_v1_PodResourceClaim = {
	/**
	 * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
	 */
	name: string;
	/**
	 * Source describes where to find the ResourceClaim.
	 */
	source?: io_k8s_api_core_v1_ClaimSource;
};

