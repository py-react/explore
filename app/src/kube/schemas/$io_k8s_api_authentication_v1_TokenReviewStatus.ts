export const $io_k8s_api_authentication_v1_TokenReviewStatus = {
	description: `TokenReviewStatus is the result of the token authentication request.`,
	properties: {
		audiences: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		authenticated: {
	type: 'boolean',
	description: `Authenticated indicates that the token was associated with a known user.`,
},
		error: {
	type: 'string',
	description: `Error indicates that the token couldn't be checked`,
},
		user: {
	type: 'io_k8s_api_authentication_v1_UserInfo',
	description: `User is the UserInfo associated with the provided token.`,
},
	},
} as const;