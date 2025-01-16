export const $io_k8s_api_flowcontrol_v1beta3_FlowSchemaCondition = {
	description: `FlowSchemaCondition describes conditions for a FlowSchema.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `\`lastTransitionTime\` is the last time the condition transitioned from one status to another.`,
},
		message: {
	type: 'string',
	description: `\`message\` is a human-readable message indicating details about last transition.`,
},
		reason: {
	type: 'string',
	description: `\`reason\` is a unique, one-word, CamelCase reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `\`status\` is the status of the condition. Can be True, False, Unknown. Required.`,
},
		type: {
	type: 'string',
	description: `\`type\` is the type of the condition. Required.`,
},
	},
} as const;