import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export type io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition = {
	/**
	 * lastTransitionTime is the last time the condition transitioned from one status to another
	 */
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * message is a human-readable explanation containing details about the transition
	 */
	message?: string;
	/**
	 * reason is the reason for the condition's last transition.
	 */
	reason?: string;
	/**
	 * status is the status of the condition (True, False, Unknown)
	 */
	status: string;
	/**
	 * type describes the current condition
	 */
	type: string;
};

