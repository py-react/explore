import type { io_k8s_api_core_v1_PodAffinityTerm } from './io_k8s_api_core_v1_PodAffinityTerm';

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export type io_k8s_api_core_v1_WeightedPodAffinityTerm = {
	/**
	 * Required. A pod affinity term, associated with the corresponding weight.
	 */
	podAffinityTerm: io_k8s_api_core_v1_PodAffinityTerm;
	/**
	 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
	 */
	weight: number;
};

