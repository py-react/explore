import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * VolumeResourceRequirements describes the storage resource requirements for a volume.
 */
export type io_k8s_api_core_v1_VolumeResourceRequirements = {
	/**
	 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	limits?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	 */
	requests?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
};

