export const $io_k8s_api_core_v1_SELinuxOptions = {
	description: `SELinuxOptions are the labels to be applied to the container`,
	properties: {
		level: {
	type: 'string',
	description: `Level is SELinux level label that applies to the container.`,
},
		role: {
	type: 'string',
	description: `Role is a SELinux role label that applies to the container.`,
},
		type: {
	type: 'string',
	description: `Type is a SELinux type label that applies to the container.`,
},
		user: {
	type: 'string',
	description: `User is a SELinux user label that applies to the container.`,
},
	},
} as const;