export const $io_k8s_api_core_v1_AzureFileVolumeSource = {
	description: `AzureFile represents an Azure File Service mount on the host and bind mount to the pod.`,
	properties: {
		readOnly: {
	type: 'boolean',
	description: `readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
		secretName: {
	type: 'string',
	description: `secretName is the  name of secret that contains Azure Storage Account Name and Key`,
	isRequired: true,
},
		shareName: {
	type: 'string',
	description: `shareName is the azure share Name`,
	isRequired: true,
},
	},
} as const;