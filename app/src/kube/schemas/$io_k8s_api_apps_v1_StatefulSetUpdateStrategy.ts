export const $io_k8s_api_apps_v1_StatefulSetUpdateStrategy = {
	description: `StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.`,
	properties: {
		rollingUpdate: {
	type: 'io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy',
	description: `RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.`,
},
		type: {
	type: 'Enum',
},
	},
} as const;