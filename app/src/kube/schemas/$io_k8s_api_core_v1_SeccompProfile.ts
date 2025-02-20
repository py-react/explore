export const $io_k8s_api_core_v1_SeccompProfile = {
	description: `SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.`,
	properties: {
		localhostProfile: {
	type: 'string',
	description: `localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is "Localhost". Must NOT be set for any other type.`,
},
		type: {
	type: 'Enum',
	isRequired: true,
},
	},
} as const;