export const $io_k8s_api_storage_v1_TokenRequest = {
	description: `TokenRequest contains parameters of a service account token.`,
	properties: {
		audience: {
	type: 'string',
	description: `audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.`,
	isRequired: true,
},
		expirationSeconds: {
	type: 'number',
	description: `expirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec".`,
	format: 'int64',
},
	},
} as const;