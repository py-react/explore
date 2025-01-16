import type { io_k8s_api_core_v1_PersistentVolumeClaimSpec } from './io_k8s_api_core_v1_PersistentVolumeClaimSpec';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
 */
export type io_k8s_api_core_v1_PersistentVolumeClaimTemplate = {
	/**
	 * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
	 */
	spec: io_k8s_api_core_v1_PersistentVolumeClaimSpec;
};

