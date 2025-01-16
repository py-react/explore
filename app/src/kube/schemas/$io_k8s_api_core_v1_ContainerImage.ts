export const $io_k8s_api_core_v1_ContainerImage = {
	description: `Describe a container image`,
	properties: {
		names: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		sizeBytes: {
	type: 'number',
	description: `The size of the image in bytes.`,
	format: 'int64',
},
	},
} as const;