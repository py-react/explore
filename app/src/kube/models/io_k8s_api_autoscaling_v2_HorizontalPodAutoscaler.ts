import type { io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec } from './io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec';
import type { io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus } from './io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export type io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
	 */
	spec?: io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec;
	/**
	 * status is the current information about the autoscaler.
	 */
	status?: io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus;
};

