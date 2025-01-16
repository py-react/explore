export const $io_k8s_api_storage_v1_CSINodeSpec = {
	description: `CSINodeSpec holds information about the specification of all CSI drivers installed on a node`,
	properties: {
		drivers: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_storage_v1_CSINodeDriver',
	},
	isRequired: true,
},
	},
} as const;