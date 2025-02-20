export const $io_k8s_api_core_v1_FlockerVolumeSource = {
	description: `Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		datasetName: {
	type: 'string',
	description: `datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated`,
},
		datasetUUID: {
	type: 'string',
	description: `datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset`,
},
	},
} as const;