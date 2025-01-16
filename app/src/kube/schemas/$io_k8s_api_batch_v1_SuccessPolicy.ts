export const $io_k8s_api_batch_v1_SuccessPolicy = {
	description: `SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.`,
	properties: {
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_batch_v1_SuccessPolicyRule',
	},
	isRequired: true,
},
	},
} as const;