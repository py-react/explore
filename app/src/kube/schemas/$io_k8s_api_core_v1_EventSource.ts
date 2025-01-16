export const $io_k8s_api_core_v1_EventSource = {
	description: `EventSource contains information for an event.`,
	properties: {
		component: {
	type: 'string',
	description: `Component from which the event is generated.`,
},
		host: {
	type: 'string',
	description: `Node name on which the event is generated.`,
},
	},
} as const;