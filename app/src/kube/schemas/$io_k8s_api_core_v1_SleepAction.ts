export const $io_k8s_api_core_v1_SleepAction = {
	description: `SleepAction describes a "sleep" action.`,
	properties: {
		seconds: {
	type: 'number',
	description: `Seconds is the number of seconds to sleep.`,
	isRequired: true,
	format: 'int64',
},
	},
} as const;