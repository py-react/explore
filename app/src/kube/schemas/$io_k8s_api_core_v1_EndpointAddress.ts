export const $io_k8s_api_core_v1_EndpointAddress = {
	description: `EndpointAddress is a tuple that describes single IP address.`,
	properties: {
		hostname: {
	type: 'string',
	description: `The Hostname of this endpoint`,
},
		ip: {
	type: 'string',
	description: `The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).`,
	isRequired: true,
},
		nodeName: {
	type: 'string',
	description: `Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.`,
},
		targetRef: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `Reference to object providing the endpoint.`,
},
	},
} as const;