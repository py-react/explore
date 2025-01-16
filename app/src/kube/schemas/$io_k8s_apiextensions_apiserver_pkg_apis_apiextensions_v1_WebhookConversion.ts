export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion = {
	description: `WebhookConversion describes how to call a conversion webhook`,
	properties: {
		clientConfig: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig',
	description: `clientConfig is the instructions for how to call the webhook if strategy is \`Webhook\`.`,
},
		conversionReviewVersions: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;