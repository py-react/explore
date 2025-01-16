export const $io_k8s_api_core_v1_SecretReference = {
	description: `SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace`,
	properties: {
		name: {
	type: 'string',
	description: `name is unique within a namespace to reference a secret resource.`,
},
		namespace: {
	type: 'string',
	description: `namespace defines the space within which the secret name must be unique.`,
},
	},
} as const;