import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export type io_k8s_api_core_v1_ResourceQuotaStatus = {
	/**
	 * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
	 */
	hard?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Used is the current observed total usage of the resource in the namespace.
	 */
	used?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
};

