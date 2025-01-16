export const $io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus = {
	description: `PriorityLevelConfigurationStatus represents the current state of a "request-priority".`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition',
	},
},
	},
} as const;