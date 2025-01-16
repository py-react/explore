export const $io_k8s_api_admissionregistration_v1_ServiceReference = {
	description: `ServiceReference holds a reference to Service.legacy.k8s.io`,
	properties: {
		name: {
	type: 'string',
	description: `\`name\` is the name of the service. Required`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `\`namespace\` is the namespace of the service. Required`,
	isRequired: true,
},
		path: {
	type: 'string',
	description: `\`path\` is an optional URL path which will be sent in any request to this service.`,
},
		port: {
	type: 'number',
	description: `If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. \`port\` should be a valid port number (1-65535, inclusive).`,
	format: 'int32',
},
	},
} as const;