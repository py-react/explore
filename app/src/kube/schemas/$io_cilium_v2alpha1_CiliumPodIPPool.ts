export const $io_cilium_v2alpha1_CiliumPodIPPool = {
	description: `CiliumPodIPPool defines an IP pool that can be used for pooled IPAM (i.e. the multi-pool IPAM mode).`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		spec: {
	properties: {
		ipv4: {
	description: `IPv4 specifies the IPv4 CIDRs and mask sizes of the pool`,
	properties: {
		cidrs: {
	type: 'array',
	contains: {
	type: 'string',
	description: `PoolCIDR is an IP pool CIDR.`,
	format: 'cidr',
},
	isRequired: true,
},
		maskSize: {
	type: 'number',
	description: `MaskSize is the mask size of the pool.`,
	isRequired: true,
	maximum: 32,
	minimum: 1,
},
	},
},
		ipv6: {
	description: `IPv6 specifies the IPv6 CIDRs and mask sizes of the pool`,
	properties: {
		cidrs: {
	type: 'array',
	contains: {
	type: 'string',
	description: `PoolCIDR is an IP pool CIDR.`,
	format: 'cidr',
},
	isRequired: true,
},
		maskSize: {
	type: 'number',
	description: `MaskSize is the mask size of the pool.`,
	isRequired: true,
	maximum: 128,
	minimum: 1,
},
	},
},
	},
	isRequired: true,
},
	},
} as const;