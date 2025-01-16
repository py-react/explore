export const $io_k8s_api_core_v1_NodeStatus = {
	description: `NodeStatus is information about the current status of a node.`,
	properties: {
		addresses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeAddress',
	},
},
		allocatable: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		capacity: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeCondition',
	},
},
		config: {
	type: 'io_k8s_api_core_v1_NodeConfigStatus',
	description: `Status of the config assigned to the node via the dynamic Kubelet config feature.`,
},
		daemonEndpoints: {
	type: 'io_k8s_api_core_v1_NodeDaemonEndpoints',
	description: `Endpoints of daemons running on the Node.`,
},
		images: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerImage',
	},
},
		nodeInfo: {
	type: 'io_k8s_api_core_v1_NodeSystemInfo',
	description: `Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info`,
},
		phase: {
	type: 'Enum',
},
		runtimeHandlers: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeRuntimeHandler',
	},
},
		volumesAttached: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_AttachedVolume',
	},
},
		volumesInUse: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;