export const $io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup = {
	description: `APIGroup contains the name, the supported versions, and the preferred version of a group.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		name: {
	type: 'string',
	description: `name is the name of the group.`,
	isRequired: true,
},
		preferredVersion: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery',
	description: `preferredVersion is the version preferred by the API server, which probably is the storage version.`,
},
		serverAddressByClientCIDRs: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR',
	},
},
		versions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery',
	},
	isRequired: true,
},
	},
} as const;