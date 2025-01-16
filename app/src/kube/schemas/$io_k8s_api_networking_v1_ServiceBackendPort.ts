export const $io_k8s_api_networking_v1_ServiceBackendPort = {
	description: `ServiceBackendPort is the service port being referenced.`,
	properties: {
		name: {
	type: 'string',
	description: `name is the name of the port on the Service. This is a mutually exclusive setting with "Number".`,
},
		number: {
	type: 'number',
	description: `number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".`,
	format: 'int32',
},
	},
} as const;