export const $io_k8s_api_networking_v1_HTTPIngressPath = {
	description: `HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.`,
	properties: {
		backend: {
	type: 'io_k8s_api_networking_v1_IngressBackend',
	description: `backend defines the referenced service endpoint to which the traffic will be forwarded to.`,
	isRequired: true,
},
		path: {
	type: 'string',
	description: `path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".`,
},
		pathType: {
	type: 'Enum',
	isRequired: true,
},
	},
} as const;