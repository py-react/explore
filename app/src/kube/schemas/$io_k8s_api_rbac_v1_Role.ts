export const $io_k8s_api_rbac_v1_Role = {
	description: `Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata.`,
},
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_rbac_v1_PolicyRule',
	},
},
	},
} as const;