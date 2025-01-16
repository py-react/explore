export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion = {
	description: `CustomResourceConversion describes how to convert different versions of a CR.`,
	properties: {
		strategy: {
	type: 'string',
	description: `strategy specifies how custom resources are converted between versions. Allowed values are: - \`"None"\`: The converter only change the apiVersion and would not touch any other field in the custom resource. - \`"Webhook"\`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.`,
	isRequired: true,
},
		webhook: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion',
	description: `webhook describes how to call the conversion webhook. Required when \`strategy\` is set to \`"Webhook"\`.`,
},
	},
} as const;