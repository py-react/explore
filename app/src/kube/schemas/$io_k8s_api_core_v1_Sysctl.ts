export const $io_k8s_api_core_v1_Sysctl = {
	description: `Sysctl defines a kernel parameter to be set`,
	properties: {
		name: {
	type: 'string',
	description: `Name of a property to set`,
	isRequired: true,
},
		value: {
	type: 'string',
	description: `Value of a property to set`,
	isRequired: true,
},
	},
} as const;