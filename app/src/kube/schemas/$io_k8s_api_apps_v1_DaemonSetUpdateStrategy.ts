export const $io_k8s_api_apps_v1_DaemonSetUpdateStrategy = {
	description: `DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.`,
	properties: {
		rollingUpdate: {
	type: 'io_k8s_api_apps_v1_RollingUpdateDaemonSet',
	description: `Rolling update config params. Present only if type = "RollingUpdate".`,
},
		type: {
	type: 'Enum',
},
	},
} as const;