export const $io_k8s_api_core_v1_TCPSocketAction = {
	description: `TCPSocketAction describes an action based on opening a socket`,
	properties: {
		host: {
	type: 'string',
	description: `Optional: Host name to connect to, defaults to the pod IP.`,
},
		port: {
	type: 'io_k8s_apimachinery_pkg_util_intstr_IntOrString',
	description: `Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.`,
	isRequired: true,
},
	},
} as const;