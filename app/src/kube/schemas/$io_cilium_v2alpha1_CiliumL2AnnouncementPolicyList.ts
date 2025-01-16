export const $io_cilium_v2alpha1_CiliumL2AnnouncementPolicyList = {
	description: `CiliumL2AnnouncementPolicyList is a list of CiliumL2AnnouncementPolicy`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		items: {
	type: 'array',
	contains: {
		type: 'io_cilium_v2alpha1_CiliumL2AnnouncementPolicy',
	},
	isRequired: true,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta',
	description: `Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
	},
} as const;