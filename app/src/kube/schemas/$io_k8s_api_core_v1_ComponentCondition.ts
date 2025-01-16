export const $io_k8s_api_core_v1_ComponentCondition = {
	description: `Information about the condition of a component.`,
	properties: {
		error: {
	type: 'string',
	description: `Condition error code for a component. For example, a health check error code.`,
},
		message: {
	type: 'string',
	description: `Message about the condition for a component. For example, information about a health check.`,
},
		status: {
	type: 'string',
	description: `Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type of condition for a component. Valid value: "Healthy"`,
	isRequired: true,
},
	},
} as const;