import type { io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition } from './io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition';
import type { io_k8s_api_autoscaling_v2_MetricStatus } from './io_k8s_api_autoscaling_v2_MetricStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export type io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus = {
	/**
	 * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
	 */
	conditions?: Array<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition>;
	/**
	 * currentMetrics is the last read state of the metrics used by this autoscaler.
	 */
	currentMetrics?: Array<io_k8s_api_autoscaling_v2_MetricStatus>;
	/**
	 * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
	 */
	currentReplicas?: number;
	/**
	 * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
	 */
	desiredReplicas: number;
	/**
	 * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
	 */
	lastScaleTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * observedGeneration is the most recent generation observed by this autoscaler.
	 */
	observedGeneration?: number;
};

