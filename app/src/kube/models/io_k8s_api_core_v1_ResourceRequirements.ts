import type { io_k8s_api_core_v1_ResourceClaim } from './io_k8s_api_core_v1_ResourceClaim';
import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export type io_k8s_api_core_v1_ResourceRequirements = {
	/**
	 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
 * 
 * This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.
 * 
 * This field is immutable. It can only be set for containers.
	 */
	claims?: Array<io_k8s_api_core_v1_ResourceClaim>;
	/**
	 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	limits?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	requests?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
};

