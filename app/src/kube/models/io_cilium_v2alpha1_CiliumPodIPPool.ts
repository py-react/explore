import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * CiliumPodIPPool defines an IP pool that can be used for pooled IPAM (i.e. the multi-pool IPAM mode).
 */
export type io_cilium_v2alpha1_CiliumPodIPPool = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	spec: {
/**
 * IPv4 specifies the IPv4 CIDRs and mask sizes of the pool
 */
ipv4?: {
/**
 * CIDRs is a list of IPv4 CIDRs that are part of the pool.
 */
cidrs: Array<string>;
/**
 * MaskSize is the mask size of the pool.
 */
maskSize: number;
};
/**
 * IPv6 specifies the IPv6 CIDRs and mask sizes of the pool
 */
ipv6?: {
/**
 * CIDRs is a list of IPv6 CIDRs that are part of the pool.
 */
cidrs: Array<string>;
/**
 * MaskSize is the mask size of the pool.
 */
maskSize: number;
};
};
};

