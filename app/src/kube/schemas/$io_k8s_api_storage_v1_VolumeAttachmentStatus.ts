export const $io_k8s_api_storage_v1_VolumeAttachmentStatus = {
	description: `VolumeAttachmentStatus is the status of a VolumeAttachment request.`,
	properties: {
		attachError: {
	type: 'io_k8s_api_storage_v1_VolumeError',
	description: `attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.`,
},
		attached: {
	type: 'boolean',
	description: `attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.`,
	isRequired: true,
},
		attachmentMetadata: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		detachError: {
	type: 'io_k8s_api_storage_v1_VolumeError',
	description: `detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.`,
},
	},
} as const;