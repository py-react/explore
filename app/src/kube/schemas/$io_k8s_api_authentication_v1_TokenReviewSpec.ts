export const $io_k8s_api_authentication_v1_TokenReviewSpec = {
	description: `TokenReviewSpec is a description of the token authentication request.`,
	properties: {
		audiences: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		token: {
	type: 'string',
	description: `Token is the opaque bearer token.`,
},
	},
} as const;