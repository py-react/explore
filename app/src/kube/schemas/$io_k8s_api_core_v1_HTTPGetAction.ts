export const $io_k8s_api_core_v1_HTTPGetAction = {
	description: `HTTPGetAction describes an action based on HTTP Get requests.`,
	properties: {
		host: {
	type: 'string',
	description: `Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.`,
},
		httpHeaders: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_HTTPHeader',
	},
},
		path: {
	type: 'string',
	description: `Path to access on the HTTP server.`,
},
		port: {
	type: 'io_k8s_apimachinery_pkg_util_intstr_IntOrString',
	description: `Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.`,
	isRequired: true,
},
		scheme: {
	type: 'Enum',
},
	},
} as const;