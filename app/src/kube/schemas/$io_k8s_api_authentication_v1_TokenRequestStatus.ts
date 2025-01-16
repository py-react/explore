export const $io_k8s_api_authentication_v1_TokenRequestStatus = {
	description: `TokenRequestStatus is the result of a token request.`,
	properties: {
		expirationTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `ExpirationTimestamp is the time of expiration of the returned token.`,
	isRequired: true,
},
		token: {
	type: 'string',
	description: `Token is the opaque bearer token.`,
	isRequired: true,
},
	},
} as const;