export const $io_k8s_api_networking_v1_IngressServiceBackend = {
	description: `IngressServiceBackend references a Kubernetes Service as a Backend.`,
	properties: {
		name: {
	type: 'string',
	description: `name is the referenced service. The service must exist in the same namespace as the Ingress object.`,
	isRequired: true,
},
		port: {
	type: 'io_k8s_api_networking_v1_ServiceBackendPort',
	description: `port of the referenced service. A port name or port number is required for a IngressServiceBackend.`,
},
	},
} as const;