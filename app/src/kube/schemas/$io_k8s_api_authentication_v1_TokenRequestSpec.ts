export const $io_k8s_api_authentication_v1_TokenRequestSpec = {
	description: `TokenRequestSpec contains client provided parameters of a token request.`,
	properties: {
		audiences: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		boundObjectRef: {
	type: 'io_k8s_api_authentication_v1_BoundObjectReference',
	description: `BoundObjectRef is a reference to an object that the token will be bound to. The token will only be valid for as long as the bound object exists. NOTE: The API server's TokenReview endpoint will validate the BoundObjectRef, but other audiences may not. Keep ExpirationSeconds small if you want prompt revocation.`,
},
		expirationSeconds: {
	type: 'number',
	description: `ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.`,
	format: 'int64',
},
	},
} as const;