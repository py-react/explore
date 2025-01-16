export const $io_k8s_api_networking_v1_IngressClassSpec = {
	description: `IngressClassSpec provides information about the class of an Ingress.`,
	properties: {
		controller: {
	type: 'string',
	description: `controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.`,
},
		parameters: {
	type: 'io_k8s_api_networking_v1_IngressClassParametersReference',
	description: `parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.`,
},
	},
} as const;