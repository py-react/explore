export const $io_k8s_api_core_v1_DownwardAPIProjection = {
	description: `Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.`,
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_DownwardAPIVolumeFile',
	},
},
	},
} as const;