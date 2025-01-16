export const $io_k8s_api_flowcontrol_v1beta3_FlowSchemaStatus = {
	description: `FlowSchemaStatus represents the current state of a FlowSchema.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_FlowSchemaCondition',
	},
},
	},
} as const;