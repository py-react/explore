import type { io_k8s_api_rbac_v1_AggregationRule } from './io_k8s_api_rbac_v1_AggregationRule';
import type { io_k8s_api_rbac_v1_PolicyRule } from './io_k8s_api_rbac_v1_PolicyRule';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export type io_k8s_api_rbac_v1_ClusterRole = {
	/**
	 * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
	 */
	aggregationRule?: io_k8s_api_rbac_v1_AggregationRule;
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata.
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Rules holds all the PolicyRules for this ClusterRole
	 */
	rules?: Array<io_k8s_api_rbac_v1_PolicyRule>;
};

