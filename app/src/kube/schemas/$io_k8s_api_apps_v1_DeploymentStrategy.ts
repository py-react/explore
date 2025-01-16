export const $io_k8s_api_apps_v1_DeploymentStrategy = {
	description: `DeploymentStrategy describes how to replace existing pods with new ones.`,
	properties: {
		rollingUpdate: {
	type: 'io_k8s_api_apps_v1_RollingUpdateDeployment',
	description: `Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.`,
},
		type: {
	type: 'Enum',
},
	},
} as const;