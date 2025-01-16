export const $io_k8s_api_discovery_v1_EndpointSlice = {
	description: `EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.`,
	properties: {
		addressType: {
	type: 'Enum',
	isRequired: true,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		endpoints: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_discovery_v1_Endpoint',
	},
	isRequired: true,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata.`,
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_discovery_v1_EndpointPort',
	},
},
	},
} as const;