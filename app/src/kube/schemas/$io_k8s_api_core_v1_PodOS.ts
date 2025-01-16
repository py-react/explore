export const $io_k8s_api_core_v1_PodOS = {
	description: `PodOS defines the OS parameters of a pod.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null`,
	isRequired: true,
},
	},
} as const;