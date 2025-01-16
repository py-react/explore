export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference = {
	description: `ServiceReference holds a reference to Service.legacy.k8s.io`,
	properties: {
		name: {
	type: 'string',
	description: `name is the name of the service. Required`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `namespace is the namespace of the service. Required`,
	isRequired: true,
},
		path: {
	type: 'string',
	description: `path is an optional URL path at which the webhook will be contacted.`,
},
		port: {
	type: 'number',
	description: `port is an optional service port at which the webhook will be contacted. \`port\` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.`,
	format: 'int32',
},
	},
} as const;