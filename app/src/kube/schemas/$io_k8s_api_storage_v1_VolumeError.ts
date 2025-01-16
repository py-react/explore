export const $io_k8s_api_storage_v1_VolumeError = {
	description: `VolumeError captures an error encountered during a volume operation.`,
	properties: {
		message: {
	type: 'string',
	description: `message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.`,
},
		time: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `time represents the time the error was encountered.`,
},
	},
} as const;