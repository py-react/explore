export const $io_k8s_api_core_v1_NodeSpec = {
	description: `NodeSpec describes the attributes that a node is created with.`,
	properties: {
		configSource: {
	type: 'io_k8s_api_core_v1_NodeConfigSource',
	description: `Deprecated: Previously used to specify the source of the node's configuration for the DynamicKubeletConfig feature. This feature is removed.`,
},
		externalID: {
	type: 'string',
	description: `Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966`,
},
		podCIDR: {
	type: 'string',
	description: `PodCIDR represents the pod IP range assigned to the node.`,
},
		podCIDRs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		providerID: {
	type: 'string',
	description: `ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>`,
},
		taints: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Taint',
	},
},
		unschedulable: {
	type: 'boolean',
	description: `Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration`,
},
	},
} as const;