export const $io_k8s_api_batch_v1_PodFailurePolicyOnExitCodesRequirement = {
	description: `PodFailurePolicyOnExitCodesRequirement describes the requirement for handling a failed pod based on its container exit codes. In particular, it lookups the .state.terminated.exitCode for each app container and init container status, represented by the .status.containerStatuses and .status.initContainerStatuses fields in the Pod status, respectively. Containers completed with success (exit code 0) are excluded from the requirement check.`,
	properties: {
		containerName: {
	type: 'string',
	description: `Restricts the check for exit codes to the container with the specified name. When null, the rule applies to all containers. When specified, it should match one the container or initContainer names in the pod template.`,
},
		operator: {
	type: 'Enum',
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'number',
	format: 'int32',
},
	isRequired: true,
},
	},
} as const;