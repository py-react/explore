export const $io_k8s_api_core_v1_ConfigMapNodeConfigSource = {
	description: `ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration`,
	properties: {
		kubeletConfigKey: {
	type: 'string',
	description: `KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.`,
	isRequired: true,
},
		resourceVersion: {
	type: 'string',
	description: `ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.`,
},
		uid: {
	type: 'string',
	description: `UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.`,
},
	},
} as const;