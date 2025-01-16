export const $io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference = {
	description: `ServiceReference holds a reference to Service.legacy.k8s.io`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the service`,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace of the service`,
},
		port: {
	type: 'number',
	description: `If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. \`port\` should be a valid port number (1-65535, inclusive).`,
	format: 'int32',
},
	},
} as const;