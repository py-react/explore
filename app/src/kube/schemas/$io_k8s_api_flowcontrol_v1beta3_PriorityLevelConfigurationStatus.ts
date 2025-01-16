export const $io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationStatus = {
	description: `PriorityLevelConfigurationStatus represents the current state of a "request-priority".`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationCondition',
	},
},
	},
} as const;