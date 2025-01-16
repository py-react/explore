import type { io_cilium_v2_CiliumClusterwideNetworkPolicy } from './io_cilium_v2_CiliumClusterwideNetworkPolicy';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * CiliumClusterwideNetworkPolicyList is a list of CiliumClusterwideNetworkPolicy
 */
export type io_cilium_v2_CiliumClusterwideNetworkPolicyList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * List of ciliumclusterwidenetworkpolicies. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
	 */
	items: Array<io_cilium_v2_CiliumClusterwideNetworkPolicy>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

