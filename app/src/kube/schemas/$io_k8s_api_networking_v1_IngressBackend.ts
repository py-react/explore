export const $io_k8s_api_networking_v1_IngressBackend = {
	description: `IngressBackend describes all endpoints for a given service and port.`,
	properties: {
		resource: {
	type: 'io_k8s_api_core_v1_TypedLocalObjectReference',
	description: `resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".`,
},
		service: {
	type: 'io_k8s_api_networking_v1_IngressServiceBackend',
	description: `service references a service as a backend. This is a mutually exclusive setting with "Resource".`,
},
	},
} as const;