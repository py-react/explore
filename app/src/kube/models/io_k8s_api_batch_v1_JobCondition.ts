import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * JobCondition describes current state of a job.
 */
export type io_k8s_api_batch_v1_JobCondition = {
	/**
	 * Last time the condition was checked.
	 */
	lastProbeTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Last time the condition transit from one status to another.
	 */
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Human readable message indicating details about last transition.
	 */
	message?: string;
	/**
	 * (brief) reason for the condition's last transition.
	 */
	reason?: string;
	/**
	 * Status of the condition, one of True, False, Unknown.
	 */
	status: string;
	/**
	 * Type of job condition, Complete or Failed.
	 */
	type: string;
};

