export const $io_k8s_api_core_v1_NodeConfigSource = {
	description: `NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22`,
	properties: {
		configMap: {
	type: 'io_k8s_api_core_v1_ConfigMapNodeConfigSource',
	description: `ConfigMap is a reference to a Node's ConfigMap`,
},
	},
} as const;