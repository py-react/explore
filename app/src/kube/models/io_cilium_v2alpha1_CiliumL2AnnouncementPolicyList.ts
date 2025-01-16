import type { io_cilium_v2alpha1_CiliumL2AnnouncementPolicy } from './io_cilium_v2alpha1_CiliumL2AnnouncementPolicy';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * CiliumL2AnnouncementPolicyList is a list of CiliumL2AnnouncementPolicy
 */
export type io_cilium_v2alpha1_CiliumL2AnnouncementPolicyList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * List of ciliuml2announcementpolicies. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
	 */
	items: Array<io_cilium_v2alpha1_CiliumL2AnnouncementPolicy>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

