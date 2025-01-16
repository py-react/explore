import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * NamespaceCondition contains details about state of namespace.
 */
export type io_k8s_api_core_v1_NamespaceCondition = {
	lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	message?: string;
	reason?: string;
	/**
	 * Status of the condition, one of True, False, Unknown.
	 */
	status: string;
	/**
	 * Type of namespace controller condition.
	 */
	type: string;
};

