export const $io_k8s_api_core_v1_EnvFromSource = {
	description: `EnvFromSource represents the source of a set of ConfigMaps`,
	properties: {
		configMapRef: {
	type: 'io_k8s_api_core_v1_ConfigMapEnvSource',
	description: `The ConfigMap to select from`,
},
		prefix: {
	type: 'string',
	description: `An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_SecretEnvSource',
	description: `The Secret to select from`,
},
	},
} as const;