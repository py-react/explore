export const $io_k8s_api_authorization_v1_NonResourceAttributes = {
	description: `NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface`,
	properties: {
		path: {
	type: 'string',
	description: `Path is the URL path of the request`,
},
		verb: {
	type: 'string',
	description: `Verb is the standard HTTP verb`,
},
	},
} as const;