import type { io_k8s_api_core_v1_ScopeSelector } from './io_k8s_api_core_v1_ScopeSelector';
import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export type io_k8s_api_core_v1_ResourceQuotaSpec = {
	/**
	 * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
	 */
	hard?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
	 */
	scopeSelector?: io_k8s_api_core_v1_ScopeSelector;
	/**
	 * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
	 */
	scopes?: Array<'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'>;
};

