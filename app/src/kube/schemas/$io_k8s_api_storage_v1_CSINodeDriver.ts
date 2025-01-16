export const $io_k8s_api_storage_v1_CSINodeDriver = {
	description: `CSINodeDriver holds information about the specification of one CSI driver installed on a node`,
	properties: {
		allocatable: {
	type: 'io_k8s_api_storage_v1_VolumeNodeResources',
	description: `allocatable represents the volume resources of a node that are available for scheduling. This field is beta.`,
},
		name: {
	type: 'string',
	description: `name represents the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.`,
	isRequired: true,
},
		nodeID: {
	type: 'string',
	description: `nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required.`,
	isRequired: true,
},
		topologyKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;