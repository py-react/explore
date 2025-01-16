import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export type io_k8s_api_core_v1_LimitRangeItem = {
	/**
	 * Default resource requirement limit value by resource name if resource limit is omitted.
	 */
	default?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
	 */
	defaultRequest?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Max usage constraints on this kind by resource name.
	 */
	max?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
	 */
	maxLimitRequestRatio?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Min usage constraints on this kind by resource name.
	 */
	min?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Type of resource that this limit applies to.
	 */
	type: string;
};

