import type { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from './io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 */
export type io_k8s_api_rbac_v1_AggregationRule = {
	/**
	 * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
	 */
	clusterRoleSelectors?: Array<io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector>;
};

