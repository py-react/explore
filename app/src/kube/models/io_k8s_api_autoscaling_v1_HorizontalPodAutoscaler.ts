import type { io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec } from './io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec';
import type { io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus } from './io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * configuration of a horizontal pod autoscaler.
 */
export type io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * spec defines the behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
	 */
	spec?: io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec;
	/**
	 * status is the current information about the autoscaler.
	 */
	status?: io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus;
};

