import type { io_k8s_api_autoscaling_v2_MetricTarget } from './io_k8s_api_autoscaling_v2_MetricTarget';

/**
 * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export type io_k8s_api_autoscaling_v2_ContainerResourceMetricSource = {
	/**
	 * container is the name of the container in the pods of the scaling target
	 */
	container: string;
	/**
	 * name is the name of the resource in question.
	 */
	name: string;
	/**
	 * target specifies the target value for the given metric
	 */
	target: io_k8s_api_autoscaling_v2_MetricTarget;
};

