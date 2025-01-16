import type { io_k8s_api_core_v1_ScopedResourceSelectorRequirement } from './io_k8s_api_core_v1_ScopedResourceSelectorRequirement';

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export type io_k8s_api_core_v1_ScopeSelector = {
	/**
	 * A list of scope selector requirements by scope of the resources.
	 */
	matchExpressions?: Array<io_k8s_api_core_v1_ScopedResourceSelectorRequirement>;
};

