export const $io_k8s_api_discovery_v1_Endpoint = {
	description: `Endpoint represents a single logical "backend" implementing a service.`,
	properties: {
		addresses: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		conditions: {
	type: 'io_k8s_api_discovery_v1_EndpointConditions',
	description: `conditions contains information about the current status of the endpoint.`,
},
		deprecatedTopology: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		hints: {
	type: 'io_k8s_api_discovery_v1_EndpointHints',
	description: `hints contains information associated with how an endpoint should be consumed.`,
},
		hostname: {
	type: 'string',
	description: `hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.`,
},
		nodeName: {
	type: 'string',
	description: `nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.`,
},
		targetRef: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `targetRef is a reference to a Kubernetes object that represents this endpoint.`,
},
		zone: {
	type: 'string',
	description: `zone is the name of the Zone this endpoint exists in.`,
},
	},
} as const;