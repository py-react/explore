import type { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition } from './io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition';

/**
 * APIServiceStatus contains derived information about an API server
 */
export type io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus = {
	/**
	 * Current service state of apiService.
	 */
	conditions?: Array<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition>;
};

