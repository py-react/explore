import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * PersistentVolumeClaimCondition contains details about state of pvc
 */
export type io_k8s_api_core_v1_PersistentVolumeClaimCondition = {
	/**
	 * lastProbeTime is the time we probed the condition.
	 */
	lastProbeTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * lastTransitionTime is the time the condition transitioned from one status to another.
	 */
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * message is the human-readable message indicating details about last transition.
	 */
	message?: string;
	/**
	 * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.
	 */
	reason?: string;
	status: string;
	type: string;
};

