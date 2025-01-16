export const $io_k8s_api_core_v1_HTTPHeader = {
	description: `HTTPHeader describes a custom header to be used in HTTP probes`,
	properties: {
		name: {
	type: 'string',
	description: `The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.`,
	isRequired: true,
},
		value: {
	type: 'string',
	description: `The header field value`,
	isRequired: true,
},
	},
} as const;