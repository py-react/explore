export const $io_k8s_api_autoscaling_v2_HPAScalingPolicy = {
	description: `HPAScalingPolicy is a single policy which must hold true for a specified past interval.`,
	properties: {
		periodSeconds: {
	type: 'number',
	description: `periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).`,
	isRequired: true,
	format: 'int32',
},
		type: {
	type: 'string',
	description: `type is used to specify the scaling policy.`,
	isRequired: true,
},
		value: {
	type: 'number',
	description: `value contains the amount of change which is permitted by the policy. It must be greater than zero`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;