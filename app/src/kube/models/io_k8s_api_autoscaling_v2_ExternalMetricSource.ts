import type { io_k8s_api_autoscaling_v2_MetricIdentifier } from './io_k8s_api_autoscaling_v2_MetricIdentifier';
import type { io_k8s_api_autoscaling_v2_MetricTarget } from './io_k8s_api_autoscaling_v2_MetricTarget';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export type io_k8s_api_autoscaling_v2_ExternalMetricSource = {
	/**
	 * metric identifies the target metric by name and selector
	 */
	metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
	/**
	 * target specifies the target value for the given metric
	 */
	target: io_k8s_api_autoscaling_v2_MetricTarget;
};

