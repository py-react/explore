export const $io_k8s_api_core_v1_LimitRangeSpec = {
	description: `LimitRangeSpec defines a min/max usage limit for resources that match on kind.`,
	properties: {
		limits: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_LimitRangeItem',
	},
	isRequired: true,
},
	},
} as const;