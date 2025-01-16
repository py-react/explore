import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * PodCondition contains details for the current condition of this pod.
 */
export type io_k8s_api_core_v1_PodCondition = {
	/**
	 * Last time we probed the condition.
	 */
	lastProbeTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Last time the condition transitioned from one status to another.
	 */
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Human-readable message indicating details about last transition.
	 */
	message?: string;
	/**
	 * Unique, one-word, CamelCase reason for the condition's last transition.
	 */
	reason?: string;
	/**
	 * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
	 */
	status: string;
	/**
	 * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
	 */
	type: string;
};

