import type { io_k8s_api_core_v1_NodeSelector } from './io_k8s_api_core_v1_NodeSelector';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export type io_k8s_api_core_v1_VolumeNodeAffinity = {
	/**
	 * required specifies hard node constraints that must be met.
	 */
	required?: io_k8s_api_core_v1_NodeSelector;
};

