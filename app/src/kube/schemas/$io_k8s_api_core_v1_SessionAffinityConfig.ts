export const $io_k8s_api_core_v1_SessionAffinityConfig = {
	description: `SessionAffinityConfig represents the configurations of session affinity.`,
	properties: {
		clientIP: {
	type: 'io_k8s_api_core_v1_ClientIPConfig',
	description: `clientIP contains the configurations of Client IP based session affinity.`,
},
	},
} as const;