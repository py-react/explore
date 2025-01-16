import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export type io_k8s_api_core_v1_ResourceFieldSelector = {
	/**
	 * Container name: required for volumes, optional for env vars
	 */
	containerName?: string;
	/**
	 * Specifies the output format of the exposed resources, defaults to "1"
	 */
	divisor?: io_k8s_apimachinery_pkg_api_resource_Quantity;
	/**
	 * Required: resource to select
	 */
	resource: string;
};

