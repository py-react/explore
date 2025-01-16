import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export type io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition = {
	/**
	 * lastTransitionTime last time the condition transitioned from one status to another.
	 */
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * message is a human-readable message indicating details about last transition.
	 */
	message?: string;
	/**
	 * reason is a unique, one-word, CamelCase reason for the condition's last transition.
	 */
	reason?: string;
	/**
	 * status is the status of the condition. Can be True, False, Unknown.
	 */
	status: string;
	/**
	 * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
	 */
	type: string;
};

