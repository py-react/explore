import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export type io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition = {
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
	 * Status is the status of the condition. Can be True, False, Unknown.
	 */
	status: string;
	/**
	 * Type is the type of the condition.
	 */
	type: string;
};

