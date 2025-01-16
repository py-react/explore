import type { io_k8s_api_core_v1_PersistentVolumeClaimSpec } from './io_k8s_api_core_v1_PersistentVolumeClaimSpec';
import type { io_k8s_api_core_v1_PersistentVolumeClaimStatus } from './io_k8s_api_core_v1_PersistentVolumeClaimStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export type io_k8s_api_core_v1_PersistentVolumeClaim = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
	 */
	spec?: io_k8s_api_core_v1_PersistentVolumeClaimSpec;
	/**
	 * status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
	 */
	status?: io_k8s_api_core_v1_PersistentVolumeClaimStatus;
};

