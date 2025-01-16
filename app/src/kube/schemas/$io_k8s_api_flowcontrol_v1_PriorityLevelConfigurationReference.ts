export const $io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference = {
	description: `PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.`,
	properties: {
		name: {
	type: 'string',
	description: `\`name\` is the name of the priority level configuration being referenced Required.`,
	isRequired: true,
},
	},
} as const;