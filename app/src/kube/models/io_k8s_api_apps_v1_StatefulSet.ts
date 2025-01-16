import type { io_k8s_api_apps_v1_StatefulSetSpec } from './io_k8s_api_apps_v1_StatefulSetSpec';
import type { io_k8s_api_apps_v1_StatefulSetStatus } from './io_k8s_api_apps_v1_StatefulSetStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 * - Network: A single stable DNS and hostname.
 * - Storage: As many VolumeClaims as requested.
 * 
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export type io_k8s_api_apps_v1_StatefulSet = {
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
	 * Spec defines the desired identities of pods in this set.
	 */
	spec?: io_k8s_api_apps_v1_StatefulSetSpec;
	/**
	 * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
	 */
	status?: io_k8s_api_apps_v1_StatefulSetStatus;
};

