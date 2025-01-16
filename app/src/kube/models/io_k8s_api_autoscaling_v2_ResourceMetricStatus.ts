import type { io_k8s_api_autoscaling_v2_MetricValueStatus } from './io_k8s_api_autoscaling_v2_MetricValueStatus';

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export type io_k8s_api_autoscaling_v2_ResourceMetricStatus = {
	/**
	 * current contains the current value for the given metric
	 */
	current: io_k8s_api_autoscaling_v2_MetricValueStatus;
	/**
	 * name is the name of the resource in question.
	 */
	name: string;
};

