import type { io_k8s_api_autoscaling_v2_MetricIdentifier } from './io_k8s_api_autoscaling_v2_MetricIdentifier';
import type { io_k8s_api_autoscaling_v2_MetricValueStatus } from './io_k8s_api_autoscaling_v2_MetricValueStatus';

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export type io_k8s_api_autoscaling_v2_ExternalMetricStatus = {
	/**
	 * current contains the current value for the given metric
	 */
	current: io_k8s_api_autoscaling_v2_MetricValueStatus;
	/**
	 * metric identifies the target metric by name and selector
	 */
	metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
};

