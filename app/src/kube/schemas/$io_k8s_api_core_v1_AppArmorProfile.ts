export const $io_k8s_api_core_v1_AppArmorProfile = {
	description: `AppArmorProfile defines a pod or container's AppArmor settings.`,
	properties: {
		localhostProfile: {
	type: 'string',
	description: `localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".`,
},
		type: {
	type: 'Enum',
	isRequired: true,
},
	},
} as const;