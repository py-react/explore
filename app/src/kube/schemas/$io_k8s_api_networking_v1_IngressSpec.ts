export const $io_k8s_api_networking_v1_IngressSpec = {
	description: `IngressSpec describes the Ingress the user wishes to exist.`,
	properties: {
		defaultBackend: {
	type: 'io_k8s_api_networking_v1_IngressBackend',
	description: `defaultBackend is the backend that should handle requests that don't match any rule. If Rules are not specified, DefaultBackend must be specified. If DefaultBackend is not set, the handling of requests that do not match any of the rules will be up to the Ingress controller.`,
},
		ingressClassName: {
	type: 'string',
	description: `ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the \`kubernetes.io/ingress.class\` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.`,
},
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_IngressRule',
	},
},
		tls: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_IngressTLS',
	},
},
	},
} as const;