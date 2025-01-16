import type { io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler } from './io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export type io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * items is the list of horizontal pod autoscaler objects.
	 */
	items: Array<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * metadata is the standard list metadata.
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

