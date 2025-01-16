import type { io_k8s_api_rbac_v1_ClusterRoleBinding } from './io_k8s_api_rbac_v1_ClusterRoleBinding';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 */
export type io_k8s_api_rbac_v1_ClusterRoleBindingList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Items is a list of ClusterRoleBindings
	 */
	items: Array<io_k8s_api_rbac_v1_ClusterRoleBinding>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata.
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

