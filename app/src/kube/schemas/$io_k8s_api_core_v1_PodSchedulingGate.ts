export const $io_k8s_api_core_v1_PodSchedulingGate = {
	description: `PodSchedulingGate is associated to a Pod to guard its scheduling.`,
	properties: {
		name: {
	type: 'string',
	description: `Name of the scheduling gate. Each scheduling gate must have a unique name field.`,
	isRequired: true,
},
	},
} as const;