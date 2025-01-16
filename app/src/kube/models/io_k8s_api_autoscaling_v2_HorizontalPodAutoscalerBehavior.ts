import type { io_k8s_api_autoscaling_v2_HPAScalingRules } from './io_k8s_api_autoscaling_v2_HPAScalingRules';

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 */
export type io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior = {
	/**
	 * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
	 */
	scaleDown?: io_k8s_api_autoscaling_v2_HPAScalingRules;
	/**
	 * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of:
 * * increase no more than 4 pods per 60 seconds
 * * double the number of pods per 60 seconds
 * No stabilization is used.
	 */
	scaleUp?: io_k8s_api_autoscaling_v2_HPAScalingRules;
};

