export const $io_k8s_api_storage_v1_VolumeAttachmentSpec = {
	description: `VolumeAttachmentSpec is the specification of a VolumeAttachment request.`,
	properties: {
		attacher: {
	type: 'string',
	description: `attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().`,
	isRequired: true,
},
		nodeName: {
	type: 'string',
	description: `nodeName represents the node that the volume should be attached to.`,
	isRequired: true,
},
		source: {
	type: 'io_k8s_api_storage_v1_VolumeAttachmentSource',
	description: `source represents the volume that should be attached.`,
	isRequired: true,
},
	},
} as const;