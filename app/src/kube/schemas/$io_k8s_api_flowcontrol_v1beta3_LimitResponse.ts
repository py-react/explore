export const $io_k8s_api_flowcontrol_v1beta3_LimitResponse = {
	description: `LimitResponse defines how to handle requests that can not be executed right now.`,
	properties: {
		queuing: {
	type: 'io_k8s_api_flowcontrol_v1beta3_QueuingConfiguration',
	description: `\`queuing\` holds the configuration parameters for queuing. This field may be non-empty only if \`type\` is \`"Queue"\`.`,
},
		type: {
	type: 'string',
	description: `\`type\` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.`,
	isRequired: true,
},
	},
} as const;